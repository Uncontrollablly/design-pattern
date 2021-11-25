import CachedYouTubeClass from './types/cachedYouTube';

export default (): void => {
  const aYouTubeProxy = new CachedYouTubeClass();
  console.log('Get video info by id: ', aYouTubeProxy.getVideoInfo('123'));
  console.log('Get video list: ', aYouTubeProxy.listVideos().join(', '));
};
