import ConcreteObserverA from './types/ConcreteObserverA';
import ConcreteObserverB from './types/ConcreteObserverB';
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
