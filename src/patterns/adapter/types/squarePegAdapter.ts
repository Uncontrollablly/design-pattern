import RoundPeg from './roundPeg';
import SquarePeg from './squarePeg';

export default class SquarePegAdapter extends RoundPeg {
  constructor(private peg: SquarePeg) {
    super();
  }

  transformWidthToRadius(peg: SquarePeg): number {
    const width = peg.getWidth();
    return (width * Math.sqrt(2)) / 2;
  }

  getRadius(): number {
    return this.transformWidthToRadius(this.peg);
  }
}
