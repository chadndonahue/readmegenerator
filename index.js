// TODO: Include packages needed for this application
var inquirer = require("inquirer")
var generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your application?"
    },
    {
        type:"input",
        name:"instructions",
        message:"How do you run your application?"
    }
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
