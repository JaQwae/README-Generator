//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index'); //why two dots here

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  // console.log(answers.title)
return `
# ${answers.title}
  
## Description:
${answers.description}

[Deployed link]()

## Table of Contents:
### [Installation](#installation)
### [Usage](#usage)
### [Contributions](#contributions)
### [License](#license)
### [Tests](#tests)
### [Questions](#questions)

## Installation:
${answers.install}
## Usage:
${answers.usage}

![alt text]()
## Contributors:
${answers.contributors}
## Tests:
${answers.tests}
## Questions:
### Question? Contact me here:
#### GitHub: ${answers.gitHub}
#### Email: ${answers.email}

`;}

// export
module.exports = generateMarkdown;
