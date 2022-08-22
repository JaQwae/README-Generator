//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index'); //why two dots here

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if(license === 'Apache license 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'MIT'){
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Open Database License'){
    licenseBadge = '![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)'
  } else {
    licenseBadge = '';
  }
  return licenseBadge;
}

// Returns the license link
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'Apache license 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Open Software License 3.0') {
    licenseLink = 'https://opendatacommons.org/licenses/odbl/'
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// Returns the license section of README
function renderLicenseSection(license) {
  let licenseSelected = '';
  if(license === 'None'){
    licenseSelected = 'No licenses were used'
  } else {
    licenseSelected = `${license}`
  }
  return licenseSelected;
}


//Template to generate markdown for README
function generateMarkdown(answers) {
return `# ${answers.title}

## Description:
${answers.description}

[Deployed link](insert link)

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

### Features:
- Notable features of this project includes:
  - ${answers.currentFeatures}

- Future feature implementation includes:
  - ${answers.futureFeatures}

### Images:
![insert image description here](.assets/images/${answers.usage}.png)

## Contributors:
- ${answers.contributors}

## Licenses:
${renderLicenseSection(answers.license)} ${renderLicenseBadge(answers.license)}
${renderLicenseLink(answers.license)}

## Tests:
${answers.tests}

## Questions:
### Question? Contact me here:
GitHub: https://github.com/${answers.gitHub}
Email: ${answers.email}

`;}

// export
module.exports = generateMarkdown;
