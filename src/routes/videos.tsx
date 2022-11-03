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
    <div className="flex gap-10">
      <div className="w-96 px-4 py-5">
        <div className="mb-4 text-sm text-zinc-500">Search results</div>
        <VideosList videos={videos} />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
