// TODO: import fs, path and inquirer modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");


const writeFile = util.promisify(fs.writeFile);

function promptUserName() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        }
    ]);
};

function promptUserInfo(user) {
    return inquirer.prompt([
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

function generateMarkdown(user, email, avatar, login) {
    return `
# ${user.title}

## Description

${user.description}

## Table of Contents

*[Installation](#installation)
*[Usage](#usage)
*[Contributing](#contributing)

## Installation

${user.installation}

## Usage

${user.usage}

## Contributing

${user.contributors}

## License

## Questions

![GitHub email](${email})
![GitHub avatar](${avatar})
![GitHub followers](https://img.shields.io/github/followers/${login}?label=Follow&style=social)`;
};

promptUserName()
.then(function({username}) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(response){
        // console.log(response);
        const email = response.data.email
        const login = response.data.login;
        const avatar = response.data.avatar_url;

        promptUserInfo()
        .then(function(data) {
            const markdown = generateMarkdown(data, email, avatar, login);
            
            return writeFile("README.md", markdown);

        }).then( ()=> {
            console.log("Your README has been successfully created.")
        }).catch((error) => {
            console.log("Error: ", error);
        });
    });
}).catch((error) => {
    console.log("Error: ", error);
});


