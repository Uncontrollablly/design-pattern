import MarksmanFactory from './marksmanFactory';
import WarriorFactory from './warriorFactory';

export default (): void => {
  console.log('factoryMethod demo start: ');

  const warrior = new WarriorFactory().create();
  const marksman = new MarksmanFactory().create();

  warrior.attack();
  marksman.defend();

  console.log('factoryMethod demo finish. \n');
};
