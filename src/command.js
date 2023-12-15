#!/usr/bin/env node

// Importing the Command class from the 'commander' package, 
// and creating a new instance of the Command class
import { Command } from 'commander';
const program = new Command()
// Importing local functions & important JS packages
import convertHtmlToADF from './convertHtmlToADF.js';
import fs from 'fs';

// Setting up the command line interface,
// Defining the command 'parse' and its required argument '<html>'
program
  .command('parse <html>') // 
  .description('This is a console application that converts HTML to Atlassian Document Format (ADF).')
  .action((html) => {
    // Converting the HTML to ADF using the provided function
    const adfoutput = convertHtmlToADF(html);
    console.log(adfoutput);
  })
  .summary('Convert HTML to ADF')
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ htmladf parse "<h1>Hello World</h1>"');
    console.log('  $ htmladf parse "<h1>Hello World</h1>" > output.json');
  });

// Defining the option '--file' and its required argument '<file>'
program
  .command('file <file>')
  .description('Read HTML from a file')
  .action((file) => {
    fs.readFile(file, 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      }
      const adfoutput = convertHtmlToADF(data);
      console.log(adfoutput);
    });
  })
  .summary('Convert HTML to ADF')
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ htmladf file ./input.html');
  });

// Defining the command 'help'
program
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ htmladf --help');
  });

// Parsing the command line arguments
program.parse(process.argv);
