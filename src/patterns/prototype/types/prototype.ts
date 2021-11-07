import ComponentWithBackReference from './componentWithBackReference';

export default class Prototype {
  public primitive: unknown;
  public component: Record<string, unknown>;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: clone,
    };

    return clone;
  }
}
