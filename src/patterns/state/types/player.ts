import ReadyState from './readyState';
import State from './state';

export default class Player {
  private state: State;
  private isPlaying = false;

  constructor() {
    this.state = new ReadyState(this);
  }

  getIsPlaying(): boolean {
    return this.isPlaying;
  }

  setIsPlaying(isPlaying: boolean): void {
    this.isPlaying = isPlaying;
  }

  changeState(state: State): void {
    this.state = state;
  }

  clickLock(): void {
    this.state.clickLock();
  }
  clickPlay(): void {
    this.state.clickPlay();
  }
  clickNext(): void {
    this.state.clickNext();
  }
  clickPrevious(): void {
    this.state.clickPrevious();
  }

  startPlayback(): void {
    console.log('startPlayback');
  }
  stopPlayback(): void {
    console.log('stopPlayback');
  }
  nextSong(): void {
    console.log('nextSong');
  }
  previousSong(): void {
    console.log('previousSong');
  }
}
