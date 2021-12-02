import Strategy from './strategy';

export default class Context {
  private strategy: Strategy;

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): void {
    console.log(
      `The result of applying ${this.strategy.constructor.name} to nunmbers ${a} and ${b} is: `,
      this.strategy.execute(a, b)
    );
  }
}
