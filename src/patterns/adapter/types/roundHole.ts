import RoundPeg from './roundPeg';

export default class RoundHole {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }

  fits(peg: RoundPeg): boolean {
    return this.radius >= peg.getRadius();
  }
}
