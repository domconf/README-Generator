// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    }, {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    }, {
        type: "input",
        message: "What are the steps for installation to your project?",
        name: "installation",
    }, {
        type: "input",
        message: "How will you use the program for your project?",
        name: "usage",
    }, {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contribution",
    }, {
        type: "input",
        message: "Run tests and provide examples on how to run them here.",
        name: "tests",
    }, {
        type: "list",
        message: "What license did you use for this project?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GNU GPL v3", "BSD 3-Clause"]
    }, {
        type: "input",
        message: "Provide your Github username.",
        name: "username",
    }, {
        type: "input",
        message: "Provide your email address.",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
