import { LoaderFunctionArgs, Outlet, useLoaderData } from 'react-router';
import VideosList from '../components/VideosList';
import { SearchItem } from '../types/SearchItem';

export async function loader({ request }: LoaderFunctionArgs): Promise<SearchItem[]> {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet,id&q=${q || ''}&type=video&maxResults=16&key=${
      import.meta.env.VITE_YT_API_KEY
    }`
  );

  if (res.status !== 200) {
    return [];
  }

  const data = await res.json();
  return data.items;
}

export default function Videos() {
  const videos = useLoaderData() as SearchItem[];

  return (
    <div className="flex flex-col">
      <div className="order-2 mt-4 max-w-md overflow-auto bg-black px-4 py-5 lg:fixed lg:order-1 lg:mt-0 lg:h-[calc(100vh_-_4rem)]">
        <div className="mb-4 text-sm font-semibold text-zinc-500">Search results</div>
        <VideosList videos={videos} />
      </div>
      <div className="order-1 lg:order-2 lg:ml-[28rem]">
        <Outlet />
      </div>
    </div>
  );
}
