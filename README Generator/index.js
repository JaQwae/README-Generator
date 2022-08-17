// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projTitle',
        },
    ])

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
.then((data) => {
    fs.writeFile('README.md', JSON.stringify(data) ,(err) =>
        err ? console.error(err) : console.log('Success!')
    );
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
// console.log(generateMarkdown)