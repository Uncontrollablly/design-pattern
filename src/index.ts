import { demos } from './config';

Object.entries(demos).forEach(([name, demo]) => {
  console.log(`--------${name.toUpperCase()} demo start--------`);
  demo();
  console.log(`--------${name.toUpperCase()} demo finish--------\n`);
});
