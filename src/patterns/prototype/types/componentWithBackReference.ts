import Prototype from './Prototype';

export default class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}
