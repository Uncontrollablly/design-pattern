import Observer from './observer';

export default class Subject {
  private state: number;
  private observers: Observer[] = [];

  attach(s: Observer): void {
    const isExist = this.observers.includes(s);
    if (isExist) {
      return console.log('Subject: Observers has been attached already.');
    }

    console.log('Subject: Add an observer.');
    this.observers.push(s);
  }

  detach(s: Observer): void {
    const index = this.observers.indexOf(s);
    if (index === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(index, 1);
    console.log('Subject: Detached an observer.');
  }

  notify(): void {
    console.log('Subject: Notifying observers...');
    this.observers.forEach((observer) => observer.update(this.state));
  }

  public someBusinessLogic(): void {
    console.log("\nSubject: I'm doing something important.");
    this.state = Math.floor(Math.random() * 100);

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}
