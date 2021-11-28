import Player from './player';
import PlayingState from './playingState';
import ReadyState from './readyState';
import State from './state';

export default class LockedState extends State {
  constructor(player: Player) {
    super(player);
    console.log('in LockedState');
  }

  clickLock(): void {
    if (this.player.getIsPlaying())
      this.player.changeState(new PlayingState(this.player));
    else this.player.changeState(new ReadyState(this.player));
  }
  clickPlay(): void {
    console.log('Already locked, do nothing');
  }
  clickNext(): void {
    console.log('Already locked, do nothing');
  }
  clickPrevious(): void {
    console.log('Already locked, do nothing');
  }
}
