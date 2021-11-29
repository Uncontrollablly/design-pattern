import Observer from './observer';

export default class ConcreteObserverB implements Observer {
  update(data: number): void {
    console.log('ConcreteObserverB: Receive data: ', data);
  }
}
