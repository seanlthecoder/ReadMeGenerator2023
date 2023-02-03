const inquier = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// these are the array of questions for the user

const questionsList = [
  {
    name: "title",
    message: "What is the tile of your project?",
    type: "input",
  },
  {
    name: "install",
    type: "input",
    message: "What are the steps required to install your project?",
  },
  {
    name: "Description",
    type: "input",
    message: "How would you describe your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "how to use the application?",
  },
  {
    name: "License",
    type: "list",
    message: "what is the license for this project?",
    choices: [
      "MIT",
      "GPL 3.0",
      "Apache 2.0",
      "The Unlicense",
      "BSD 3",
    ],
  },

  {
    name: "Email",
    type: "input",
    message: "What is your email address?",
  },

  {
    name: "Github",
    type: "input",
    message: "What is your github username?",
  },

  {
    name: "Testing",
    type: "input",
    message: "How do you test your application?",
  },

  {
    name: "Contribute",
    type: "input",
    message: "How can someone contribute to your project?",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquier.prompt(questionsList).then(function (data) {
    console.log(data)
    writeToFile("README.md", data)
});
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data),function(err){
        if (err) throw err;
    })
}

// Function call to initialize app
init();

// { value:"https://img.shields.io/github/license/seanlthecoder/ReadMeGenerator2023", name:""
// "https://img.shields.io/npm/l/node",
// "https://img.shields.io/cran/l/inquirer"],
