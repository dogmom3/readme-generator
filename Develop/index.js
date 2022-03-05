// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a description of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is the installation process for your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How will you use this project?'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose which license you are using.',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License']
  },
  {
    type: 'input',
    name: 'contributers',
    message: 'Who contributed to this project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test this project?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'link',
    message: 'What is your github profile link?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data){

const pageREADME = generatePage(data);
fs.writeFile(fileName, pageREADME, err => {
  if (err) throw err;
  console.log(err);
console.log('Page complete! Check out readme-generator.md to see the output!');
});
}

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
