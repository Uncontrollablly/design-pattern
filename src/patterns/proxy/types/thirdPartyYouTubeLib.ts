export default interface ThirdPartyYouTubeLib {
  listVideos(): string[];
  getVideoInfo(id: string): string;
  downloadVideo(id: string): void;
}
