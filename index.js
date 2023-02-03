
const inquier = require('inquirer');
const fs = require('fs')
const util = require('util');
const {generateMarkdown} = require('./utils/generateMarkdown');

const fileAsync = util.promisify(fs.fileAsync)


// these are the array of questions for the user

const questions1 = () => {
inquirer.prompt([
{
name: "title",
message: "What is the tile of your project?"
type: "input",


},{
name: "install",
type: "input",
message: "What are the steps required to install your project?",


},{
name: "Description",
type: "input",
message: "How would you describe your project?"



},{
name: "usage",
type: "input",
message: "how to use the application?",

},{
name: "License",
type: "list",
message: "what is the license for this project?",
choices: ["https://img.shields.io/github/license/seanlthecoder/ReadMeGenerator2023", 
"https://img.shields.io/npm/l/node", 
"https://img.shields.io/cran/l/inquirer"],


// TODO: Create a function to initialize app
function init() {}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
init();