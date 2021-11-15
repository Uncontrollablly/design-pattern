import demos from './demos';
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';

console.log(chalk.greenBright(figlet.textSync('Design Patterns')));

const run = () => {
  inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'chosenPattern',
        message: 'Choose a pattern to run',
        choices: Object.keys(demos).concat('exit'),
        loop: false,
      },
    ])
    .then(({ chosenPattern }) => {
      if (chosenPattern !== 'exit') {
        console.log(
          `--------${chosenPattern.toUpperCase()} demo start--------`
        );

        demos[chosenPattern]();

        console.log(
          `--------${chosenPattern.toUpperCase()} demo finish--------\n`
        );
        setTimeout(run, 2000);
      } else {
        console.log(chalk.yellow(figlet.textSync('Bye')));
      }
    });
};

run();
