import BaseDecorator from './baseDecorator';

export default class ConcreteDecoratorB extends BaseDecorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}
