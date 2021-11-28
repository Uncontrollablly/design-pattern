import LockedState from './lockedState';
import Player from './player';
import ReadyState from './readyState';
import State from './state';

export default class PlayingState extends State {
  constructor(player: Player) {
    super(player);
    console.log('in PlayingState');
  }
  clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }
  clickPlay(): void {
    this.player.stopPlayback();
    this.player.changeState(new ReadyState(this.player));
    this.player.setIsPlaying(false);
  }
  clickNext(): void {
    this.player.nextSong();
  }
  clickPrevious(): void {
    this.player.previousSong();
  }
}
