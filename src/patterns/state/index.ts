import Player from './types/player';

export default (): void => {
  const player = new Player();
  console.log('click play');
  player.clickPlay();

  console.log('click lock');
  player.clickLock();

  console.log('click next');
  player.clickNext();

  console.log('click lock again to unlock palyer');
  player.clickLock();
};
