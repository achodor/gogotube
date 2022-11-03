import { LoaderFunctionArgs, Outlet, useLoaderData } from 'react-router';
import { mockVideo } from '../mock';
import { Video } from '../types/Video';
import VideosList from '../components/VideosList';

export async function loader({ request }: LoaderFunctionArgs): Promise<Video[]> {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  return [mockVideo, mockVideo, mockVideo];
}

export default function Videos() {
  const videos = useLoaderData() as Video[];

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
