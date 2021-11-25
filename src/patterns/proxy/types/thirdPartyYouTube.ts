import ThirdPartyYouTubeLib from './thirdPartyYouTubeLib';

export default class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
  listVideos(): string[] {
    return ['a', 'b', 'c', 'd'];
  }
  getVideoInfo(id: string): string {
    return `video information of ${id}`;
  }
  downloadVideo(id: string): void {
    console.log(`download Video-${id}`);
  }
}
