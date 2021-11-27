import demos from './demos';
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';

console.log(chalk.greenBright(figlet.textSync('Design Patterns')));

const run = async () => {
  const { chosenPattern } = await inquirer.prompt([
    {
      type: 'rawlist',
      name: 'chosenPattern',
      message: 'Choose a pattern to run',
      choices: Object.keys(demos),
      loop: false,
      pageSize: 10,
    },
  ]);

  if (Object.keys(demos).some((demo) => demo === chosenPattern)) {
    console.log(
      chalk.yellow.italic.bold(
        `\n--------${chosenPattern.toUpperCase()} DEMO START--------\n`
      )
    );

    await demos[chosenPattern]();

    console.log(
      chalk.yellow.italic.bold(
        `\n-------${chosenPattern.toUpperCase()} DEMO FINISH--------\n`
      )
    );
    setTimeout(run, 2000);
  } else {
    console.log(chalk.red.bgWhite.bold(`Pattern ${chosenPattern} not exist`));
  }
};

run();
