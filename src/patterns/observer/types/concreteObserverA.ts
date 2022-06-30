import Observer from './observer';

export default class ConcreteObserverA implements Observer {
  update(data: number): void {
    console.log('ConcreteObserverA: Receive data: ', data);
  }
}
