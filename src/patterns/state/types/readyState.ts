import LockedState from './lockedState';
import Player from './player';
import PlayingState from './playingState';
import State from './state';

export default class ReadyState extends State {
  constructor(player: Player) {
    super(player);
    console.log('in ReadyState');
  }

  clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }

  clickPlay(): void {
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
    this.player.setIsPlaying(true);
  }

  clickNext(): void {
    this.player.nextSong();
  }

  clickPrevious(): void {
    this.player.previousSong();
  }
}
