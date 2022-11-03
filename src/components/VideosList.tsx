import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types/Video';

export default function VideosList({ videos }: { videos: Video[] }) {
  return (
    <div className="flex flex-col gap-5">
      {videos.map(item => {
        return (
          <Link key={item.id} to={`/videos/${item.id}`} className="flex items-center gap-3">
            <div className="relative h-14 w-24 flex-shrink-0">
              <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} className="object-contain" />
            </div>
            <div className="truncate">
              <strong className="truncate text-sm font-extrabold">{item.snippet.title}</strong>
              <div>{item.snippet.channelTitle}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
