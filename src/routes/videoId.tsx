import { LoaderFunctionArgs, useLoaderData } from 'react-router';
import { Video } from '../types/Video';
import { mockVideo } from '../mock';

export async function loader({ params }: LoaderFunctionArgs): Promise<Video> {
  return mockVideo;
}

export default function VideoId() {
  const video = useLoaderData() as Video;

  return (
    <div className="px-4 py-5">
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h1 className="mt-6 text-3xl font-extrabold">{video.snippet.title}</h1>
      <div className="mt-2 flex items-center gap-9">
        <h2 className="text-xl">{video.snippet.channelTitle}</h2>
        <span className="text-zinc-500">{video.statistics?.viewCount} views</span>
      </div>
      <div className="mt-2 text-zinc-400" dangerouslySetInnerHTML={{ __html: video.snippet.description }}></div>
    </div>
  );
}
