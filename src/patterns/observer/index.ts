import ConcreteObserverA from './types/concreteObserverA';
import ConcreteObserverB from './types/concreteObserverB';
import Subject from './types/subject';

export default (): void => {
  const subject = new Subject();

  const subscriberA = new ConcreteObserverA();
  subject.attach(subscriberA);

  const subscriberB = new ConcreteObserverB();
  subject.attach(subscriberB);

  subject.someBusinessLogic();

  subject.someBusinessLogic();

  subject.detach(subscriberB);

  subject.someBusinessLogic();
};
