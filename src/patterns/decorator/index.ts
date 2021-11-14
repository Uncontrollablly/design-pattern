import Component from './types/component';
import ConcreteComponent from './types/concreteComponent';
import ConcreteDecoratorA from './types/concreteDecoratorA';
import ConcreteDecoratorB from './types/concreteDecoratorB';

function clientCode(component: Component) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

export default (): void => {
  const simple = new ConcreteComponent();
  console.log("Client: I've got a simple component:");
  clientCode(simple);

  const decorator1 = new ConcreteDecoratorA(simple);
  const decorator2 = new ConcreteDecoratorB(decorator1);
  console.log("Client: Now I've got a decorated component:");
  clientCode(decorator2);
};
