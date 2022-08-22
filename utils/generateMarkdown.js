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
function renderLicenseSection(license) {
  let licenseSelected = '';
  if(license === 'None'){
    licenseSelected = 'No licenses were used'
  } else {
    licenseSelected = `${license}`
  }
  
  return licenseSelected
}


//Template to generate markdown for README
function generateMarkdown(answers) {
return `# ${answers.title}

## Description:
${answers.description}

[Deployed link](insert link)

## Badges:

## Table of Contents:
### [Installation](#installation)
### [Usage](#usage)
### [Contributions](#contributions)
### [License](#license)
### [Tests](#tests)
### [Questions](#questions)

## Installation:
/To /execute this program, please follow the instructions below:
  - ${answers.install}

## Usage:

### Features
- Notable features of this project includes:
  - ${answers.currentFeatures}

- Future feature implementation includes:
  - ${answers.futureFeatures}

### Images
![insert image description here](.assets/images/${answers.usage}.png)

## Contributors:
- ${answers.contributors}

## License
${renderLicenseSection(answers.license)}

## Tests:
${answers.tests}

## Questions:
### Question? Contact me here:
GitHub: https://github.com/${answers.gitHub}
Email: ${answers.email}

`;}

// export
module.exports = generateMarkdown;
