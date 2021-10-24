import simpleFactory from './simpleFactory';

export default (): void => {
  console.log('simpleFactory demo: ');

  const { createRole } = simpleFactory;
  const warrior = createRole('warrior');
  const marksman = createRole('marksman');

  warrior.attack();
  marksman.defend();

  console.log('simpleFactory demo finish. \n');
};
