//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions =  //do we need to set this to a variable
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
                validate: (title) =>{
                    if(title){
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
                validate: (description) =>{
                    if(description){
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
                validate: (install) =>{
                    if(install){
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
                validate: (usage) =>{
                    if(usage){
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
                validate: (contributors) =>{
                    if(contributors){
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
                validate: (tests) =>{ //Do we need to require this section?
                    if(tests){
                        return true
                    } else{
                        return 'Required field left blank, please enter a value.'
                    }
                }
            },
        ])

.then(answers => {

    console.log(answers.title);

    console.log(answers.description);

    console.log(answers.install);

    console.log(answers.usage);

    console.log(answers.contributors);

    console.log(answers.tests);
})

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

//exports
module.exports = questions;