// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = 
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
                validate: (value) =>{
                    if(value){
                        return true
                    } else{
                        return 'Required field left blank, please enter a value.'
                    }
                }
            },
            {
                type: 'input',
                message: 'What is the description of your project?',
                name: 'description',
                validate: (value) =>{
                    if(value){
                        return true
                    } else{
                        return 'Required field left blank, please enter a value.'
                    }
                }
            },
            {
                type: 'input',
                message: 'How do you install your application?',
                name: 'install',
                validate: (value) =>{
                    if(value){
                        return true
                    } else{
                        return 'Required field left blank, please enter a value.'
                    }
                }
            },
            {
                type: 'input',
                message: 'Usage information?', //what does this mean?
                name: 'usage',
                validate: (value) =>{
                    if(value){
                        return true
                    } else{
                        return 'Required field left blank, please enter a value.'
                    }
                }
            },
            {
                type: 'input',
                message: 'Who are the contributors for this project?',
                name: 'contributors',
                validate: (value) =>{
                    if(value){
                        return true
                    } else{
                        return 'Required field left blank, please enter a value.'
                    }
                }
            },
            {
                type: 'input',
                message: 'Test?', //what does this mean?
                name: 'tests',
                validate: (value) =>{
                    if(value){
                        return true
                    } else{
                        return 'Required field left blank, please enter a value.'
                    }
                }
            },
        ])
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// .then((data) => {
//     fs.writeFile('README.md', JSON.stringify(data) ,(err) =>
//         err ? console.error(err) : console.log('Success! Your README file has been generated.')
//     );
// });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
// console.log(generateMarkdown)