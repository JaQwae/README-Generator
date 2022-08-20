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
  return `
  # ${answers.title}`;
  console.log(answers.description);
  console.log(answers.install);
  console.log(answers.usage);
  console.log(answers.contributors);
  console.log(answers.tests); 
}

// export
module.exports = generateMarkdown;
