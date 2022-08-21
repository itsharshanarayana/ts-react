
interface AppProps {}

interface IImageDetail {
  url: string;
  width: number;
  height: number;
}

interface IVideoId {
  kind: string;
  videoId: string;
}

interface IVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IImageDetail,
    medium: IImageDetail,
    high: IImageDetail
  },
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IVideoItem {
  kind: string;
  etag: string;
  id: IVideoId;
  snippet: IVideoSnippet
}

interface AppState {
  videos: IVideoItem[];
  selectedVideo?: IVideoItem;
}

export {
  AppState,
  AppProps,
  IVideoItem,
  IVideoSnippet,
  IVideoId,
  IImageDetail
}
