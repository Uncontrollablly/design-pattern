import Component from './component';

export default class BaseDecorator implements Component {
  constructor(private _component: Component) {}

  operation(): string {
    return this._component.operation();
  }
}
