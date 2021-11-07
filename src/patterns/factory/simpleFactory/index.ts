import simpleFactory from './simpleFactory';

export default (): void => {
  console.log('Simple Factory demo: ');

  const { createRole } = simpleFactory;
  const warrior = createRole('warrior');
  const marksman = createRole('marksman');

  warrior.attack();
  marksman.defend();

  console.log('Simple Factory demo finish. \n');
};
