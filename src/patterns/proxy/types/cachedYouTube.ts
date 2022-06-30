import ThirdPartyYouTubeLib from './thirdPartyYouTubeLib';
import ThirdPartyYouTube from './thirdPartyYouTube';

export default class CachedYouTubeClass implements ThirdPartyYouTubeLib {
  private service: ThirdPartyYouTube = new ThirdPartyYouTube();
  private listCache: string[];
  private videoCache: string;
  needReset: boolean;

  listVideos(): string[] {
    if (this.listCache == null || this.needReset)
      this.listCache = this.service.listVideos();
    return this.listCache;
  }
  getVideoInfo(id: string): string {
    if (this.videoCache == null || this.needReset)
      this.videoCache = this.service.getVideoInfo(id);
    return this.videoCache;
  }
  downloadVideo(id: string): void {
    this.service.downloadVideo(id);
  }
}
