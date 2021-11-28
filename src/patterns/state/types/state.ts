import Player from './player';

export default abstract class State {
  constructor(protected player: Player) {}

  abstract clickLock(): void;
  abstract clickPlay(): void;
  abstract clickNext(): void;
  abstract clickPrevious(): void;
}
