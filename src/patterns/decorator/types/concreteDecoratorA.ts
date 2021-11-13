import BaseDecorator from './baseDecorator';

export default class ConcreteDecoratorA extends BaseDecorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}
