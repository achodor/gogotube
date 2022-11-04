import { useState } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router';
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
  const [fullDescription, setFullDescription] = useState(video.snippet.description.length < 100);

  return (
    <div className="mx-auto max-w-6xl border-b border-zinc-900 py-5 lg:border-b-0 lg:px-4">
      <iframe
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        className="h-52 w-full lg:h-[40rem]"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="px-4 lg:px-0">
        <div className="mt-4 rounded-md bg-zinc-900 p-3">
          <h1 className="text-xl font-extrabold lg:text-3xl">{video.snippet.title}</h1>
          <div className="mt-2 flex items-center gap-9">
            <h2 className="font-semibold text-zinc-300 lg:text-lg">{video.snippet.channelTitle}</h2>
            <span className="font-semibold text-zinc-500">{video.statistics?.viewCount} views</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-zinc-400">
          <p>{fullDescription ? video.snippet.description : `${video.snippet.description.slice(0, 150)}...`}</p>
          <button className="mt-2 font-medium text-rose-500" onClick={() => setFullDescription(!fullDescription)}>
            {fullDescription ? 'Hide' : 'Show'} full description
          </button>
        </div>
      </div>
    </div>
  );
}
