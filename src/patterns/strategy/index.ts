import inquirer from 'inquirer';
import ConcreteStrategyAdd from './types/concreteStrategyAdd';
import ConcreteStrategySubtract from './types/concreteStrategySubtract';
import Context from './types/context';

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

  if (strategy === 'addition') {
    context.setStrategy(new ConcreteStrategyAdd());
  }

  if (strategy === 'subtraction') {
    context.setStrategy(new ConcreteStrategySubtract());
  }

  const result = context.executeStrategy(a, b);

  console.log(
    `The result of applying the strategy ${strategy} to nunmbers ${a} and ${b} is: `,
    result
  );
};
