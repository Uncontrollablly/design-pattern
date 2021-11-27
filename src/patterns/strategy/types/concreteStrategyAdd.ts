import Strategy from './strategy';

export default class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}
