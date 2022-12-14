//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


//Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (title) =>{
            if(title){
                return true
            } else{
                return 'Required field left blank, please enter a title.'
            }
        }
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
        validate: (description) =>{
            if(description){
                return true
            } else{
                return 'Required field left blank, please enter a description.'
            }
        }
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'install',
        validate: (install) =>{
            if(install){
                return true
            } else{
                return 'Required field left blank, please list the required tools and steps needed to run your program.'
            }
        }
    },
    {
        type: 'input',
        message: 'What are some notable features in this project?',
        name: 'currentFeatures',
        validate: (currentFeatures) =>{
            if(currentFeatures){
                return true
            } else{
                return 'Required field left blank, please enter at least one key feature.'
            }
        }
    },
    {
        type: 'input',
        message: 'What are some features that you plan on implementing in this project?',
        name: 'futureFeatures',
        // validate: (futureFeatures) =>{
        //     if(futureFeatures){
        //         return true
        //     } else{
        //         return 'Required field left blank, please enter a value.'
        //     }
        // }
    },
    {
        type: 'input',
        message: 'What is the file name of the screenshot for this project? (name only (exclude .png), image must lie in .assets/images folder structure)',
        name: 'usage',
        validate: (usage) =>{
            //TODO: add functionality to only accept the file name
            if(usage){
                return true
            } else{
                return 'Required field left blank, please enter the file name of the screenshot from images folder.'
            }
        }
    },
    {
        type: 'input',
        message: 'Who are the contributors for this project?',
        name: 'contributors',
        validate: (contributors) =>{
            if(contributors){
                return true
            } else{
                return 'Required field left blank, please enter at least one contributor.'
            }
        }
    },
    {
        type: 'list',
        message: 'What license does your program use?',
        name: 'license',
        choices: ['None', 'Apache license 2.0', 'MIT', 'Open Database License'],
    //     validate: (license) =>{
    //         if(license){
    //             return true
    //         } else{
    //             return 'Required field left blank, please select a choice.'
    //         }
    //     }
    },
    {
        type: 'input',
        message: 'Test?',
        name: 'tests',
        // validate: (tests) =>{
        //     if(tests){
        //         return true
        //     } else{
        //         return 'Required field left blank, please enter a value.'
        //     }
        // }
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
        validate: (gitHub) =>{ 
            if(gitHub){
                return true
            } else{
                return 'Required field left blank, please enter your git username.'
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        // TODO: add functionality that only excepts valid email address
        validate: (email) =>{ 
            if(email){
                return true
            } else{
                return 'Required field left blank, please enter a valid email.'
            }
        }
    },
    {
        type: 'input',
        message: 'What is this application intended to do?',
        name: 'outcome',
        // TODO: add functionality that only excepts valid email address
        validate: (outcome) =>{ 
            if(outcome){
                return true
            } else{
                return 'Required field left blank, please enter the desire outcome of your project.'
            }
        }
    },
]


// Writes README file
const writeToFile = answersInputs => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./README.md', answersInputs, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    let answersInputs = generateMarkdown(answers);
    writeToFile(answersInputs)
    });
}

// Function call to initialize app
init();

//exports
module.exports = questions;