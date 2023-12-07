import { Command } from 'commander';
const program = new Command();

program
  .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

  
program.parse();

console.log(`cheese: ${program.opts().cheese}`);