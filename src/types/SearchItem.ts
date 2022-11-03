export type SearchItem = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: { [key: string]: { url: string; width: number; height: number } };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};
