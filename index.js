// TODO: Include packages needed for this application
const inquirer = require("inquirer")

const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Please enter a title for your application."
    },
    {
        type:"input",
        name:"description",
        message:"Please enter a description for your application."
    },
    {
        type:"input",
        name:"tableofContents",
        message:"Please enter the contents of the table."
    },
    {
        type:"input",
        name:"installation",
        message:"Please enter what is necessary to run this application."
    },
    {
        type:"input",
        name:"usage",
        message:"Please enter how this application would be used."
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license does this project have?',
        choices: ["MIT", "APACHE-2.0", "ISC", "GNU"]
    },
    {
        type:"input",
        name:"contribution",
        message:"Please enter whoever contributed to this application."
    },
    {
        type:"input",
        name:"tests",
        message:"Please enter what commands are needed for this application."
    },
    {
        type:"input",
        name:"githubProfile",
        message:"Please enter your GitHub profile."
    },
    {
        type:"input",
        name:"email",
        message:"Please enter your Email."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(generateMarkdown(response))
    })
}

// Function call to initialize app
init();
