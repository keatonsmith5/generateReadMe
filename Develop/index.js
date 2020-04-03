// TODO: import fs, path and inquirer modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");


const writeFile = util.promisify(fs.writeFile);

function promptUserName() {
    inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        }
    ]);
};

function promptUserInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project."
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install your application?"
        },
        {
            type: "input",
            name: "usage",
            message: "How will your project be used?"
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed to this project?"
        },
    ]);
};

function generateMarkdown({title, description, installation, usage, contributors})




// TODO: import api and generateMarkdown modules from ./utils/

// TODO: Add inquirer question objects to questions array. This should

// include all the necessary questions for the user.
// Example question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?"
// }

// const questions = [];

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
// function writeToFile(fileName, data) {
// }

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
// function init() {

// }

// init();
