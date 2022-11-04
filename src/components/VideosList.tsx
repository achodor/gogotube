import { Link, useSearchParams } from 'react-router-dom';
import { SearchItem } from '../types/SearchItem';

export default function VideosList({ videos }: { videos: SearchItem[] }) {
  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col gap-1">
      {videos.map(item => {
        return (
          <Link
            key={item.id.videoId}
            to={`/videos/${item.id.videoId}?q=${searchParams.get('q') || ''}`}
            className="flex flex-col gap-3 rounded-md hover:bg-zinc-900 lg:flex-row lg:p-3"
          >
            <div className="flex-shrink-0">
              <img
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                className="h-[11.5rem] w-full object-cover lg:h-[5.75rem] lg:w-40"
              />
            </div>
            <div className="mb-6 flex flex-col lg:mb-0">
              <strong className="text-sm font-extrabold">{item.snippet.title}</strong>
              <span className="mt-1 inline-block text-xs font-semibold text-zinc-400">{item.snippet.channelTitle}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
