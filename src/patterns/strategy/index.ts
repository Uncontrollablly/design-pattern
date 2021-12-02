import inquirer from 'inquirer';
import ConcreteStrategyAdd from './types/concreteStrategyAdd';
import ConcreteStrategySubtract from './types/concreteStrategySubtract';
import Context from './types/context';
import Strategy from './types/strategy';

const getStrategyInstance: Record<string, Strategy> = {
  addition: new ConcreteStrategyAdd(),
  subtraction: new ConcreteStrategySubtract(),
};

export default async (): Promise<void> => {
  const context = new Context();
  const a = 12345;
  const b = 1127;

  const { strategy } = await inquirer.prompt([
    {
      type: 'rawlist',
      name: 'strategy',
      message: 'Choose a strategy',
      choices: ['addition', 'subtraction'],
      loop: false,
      pageSize: 3,
    },
  ]);

  context.setStrategy(getStrategyInstance[strategy]);
  context.executeStrategy(a, b);
};
