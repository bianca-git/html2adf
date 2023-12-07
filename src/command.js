import { Command } from 'commander';
const program = new Command()
import convertHtmlToADF from './convertHtmlToADF.js';


program
  .option('-h, --html <HTML>', 'Insert HTML to be parsed here', '<h1>This is a test parsed variable, something is broken</h1>')
  .parse(process.argv);

const htmlinput = program.opts().html;
const adfoutput = convertHtmlToADF(htmlinput);

console.log(adfoutput);