import MarksmanFactory from './types/marksmanFactory';
import WarriorFactory from './types/warriorFactory';

export default (): void => {
  const warrior = new WarriorFactory().create();
  const marksman = new MarksmanFactory().create();

  warrior.attack();
  marksman.defend();
};
