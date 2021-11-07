import { Singleton } from './types/Singleton';
import SingletonUsedClosure from './singletonUsedClosure';

const clientCode = (): void => {
  const a = Singleton.getInstance();
  const b = Singleton.getInstance();
  if (a === b) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
  a.show();

  const c = SingletonUsedClosure.getInstance();
  const d = SingletonUsedClosure.getInstance();
  if (c === d) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
  c.show();
};

export default (): void => {
  console.log('Singleton demo start: ');

  clientCode();

  console.log('Singleton demo finish. \n');
};
