// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    //function to get answers from user
    //ask for title, description, installation instruct
    //usage instructions, license, contribution instrcutions, tests,
    //github username, email address 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?:',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Describe your project. (Required): ',
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'What are the installation instructions for your application?: \n\n',
        },
        {
            type: 'input',
            name: 'usageInstructions',
            message: 'What are the usage instructions?:\n\n',
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: 'Which license do you want to apply to your application',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'contributionInstructions',
            message: 'How can contributors contribute to your project?:\n\n',
        },
        {
            type: 'input',
            name: 'projecttests',
            message: 'How can users test your application?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your github usename?',
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your email address?',
        },
    ]);
};

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README.md file is created');
    });
}

// TODO: Create a function to initialize app
const init = async () => {
    let userInput = await promptUser();
    let markDownText = generateMarkdown(userInput);
    writeToFile('README.md', markDownText);
};

// Function call to initialize app
init();

//tke user input and direct it to specific places on the readme then write that as a markdown file
