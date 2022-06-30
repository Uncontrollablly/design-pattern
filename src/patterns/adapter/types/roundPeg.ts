export default class RoundPeg {
  private radius: number;

  constructor();
  constructor(radius: number);
  constructor(radius?: number) {
    if (radius !== undefined) {
      this.radius = radius;
    }
  }

  getRadius(): number {
    return this.radius;
  }
}
