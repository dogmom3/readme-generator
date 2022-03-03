// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please give a description of your project.'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What is the installation process for your project?'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'How will you use this project?'
  },
  {
    type: 'checkbox',
    name: 'License',
    message: 'Choose which license you are using.',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License']
  },
  {
    type: 'input',
    name: 'Contributers',
    message: 'Who contributed to this project?'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'How do you test this project?'
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'GitHub link',
    message: 'What is your github profile link?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
const fs = require('fs');
const generatePage = require('./src/page-template');
const pageREADME = generatePage(name, github);
fs.writefile('.README.md', pageREADME, err => {
  if (err) throw err;
  console.log(err);
console.log('Portfolio complete! Check out README.md to see the output!');
});

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile('readme-generator.md', answers)
      console.log(answers)


      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      console.log(error)
    });
}

// Function call to initialize app
init();
