import simpleFactory from './simpleFactory';

export default (): void => {
  const { createRole } = simpleFactory;
  const warrior = createRole('warrior');
  const marksman = createRole('marksman');

  warrior.attack();
  marksman.defend();
};
