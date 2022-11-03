import { LoaderFunctionArgs, useLoaderData } from 'react-router';
import ReactMarkdown from 'react-markdown';
import { Video } from '../types/Video';

export async function loader({ params }: LoaderFunctionArgs): Promise<Video | null> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${params.id}&key=${
      import.meta.env.VITE_YT_API_KEY
    }`
  );

  if (res.status !== 200) {
    return null;
  }

  const data = await res.json();
  return data.items[0];
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
      <div className="mt-2 text-zinc-400">
        <ReactMarkdown>{video.snippet.description}</ReactMarkdown>
      </div>
    </div>
  );
}
