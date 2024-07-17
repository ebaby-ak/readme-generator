// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project',
},
{
    type: 'input',
    name: 'Table of Contents',
    message: 'Enter a table of contents for your project',
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project',
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions for your project',
},
{
    type: 'input',
    name: 'license',
    message: 'Enter the license for your project',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter guidelines for contributing to your project',
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions for your project',
},
{
    type: 'input',
    name: 'questions',
    message: 'Enter any questions or concerns you may have for your project',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Create README.md file:');
        writeToFile('./README.md', generateMarkdown({
            ...responses
        }));
    });
}

// Function call to initialize app
init();
