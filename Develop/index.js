// TODO: Include packages needed for this application
var inquirer = require('inquirer');

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
        message: 'What is the description of your project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage for this project?'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose which license you are using.',
        choices:['Apache 2.0 License',  'Boost Software License 1.0', 'BSD 3-Clause License']
      },
      {
        type: 'input',
        name: 'contributers',
        message: 'Who contributed to this project?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What is the test for this project?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'github link',
        message: 'What is your github link?'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
      writeToFile('readme-generator.md', answers)
      console.log(answers)

// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const pageHTML = generatePage(name, github);
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });



    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    console.log(error)
  });
}

// Function call to initialize app
init();
