// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "[![License: UNKNOWN](https://img.shields.io/badge/license-UNKNOWN-important.svg)](https://github.com/your/project/LICENSE)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) return '';
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return 'https://choosealicense.com/'
  }
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.License)}



## Description

This is a command line component that prompts the user to reply to questions. The answers to the questions will generate a README file with their responses.




## Table of Contents



* [Installation](#installation)







* [Usage](#usage)







* [License](#license)






* [Email](#email)





* [Github](#github)




* [Testing](#testing)



  
  

### Description
This is a dynamically generated README table.
${data.Description}
  
  




### Installation
To install the dependencies needed for this project, you would need to utilize npm install. You will need to have Node.js and npm inquirer.js installed. The user will also have to have generateMarkdown.js installed.
${data.Installation}







### Usage
When you open the index.js file in an intergrated terminal, you will then need to type node index.js in the terminal. A series of questions will render and you will need to answer each question. The responses of the question will be used to complete the README.md file.
${data.Usage}







### License
${data.License}

${renderLicenseLink(data.License)}


### Email
Feel free to reach me for any questions about this project
${data.Email}





### GitHub
Please check my other projects in github:

[Github Profile](https://github.com/seanlthecoder)















  
### Testing
${data.Testing}
In order to properly test this application, you will need to answer all questions. After answering the questions, confirm that the responses are correctly generated. If you dont answer any of the questions, it will result in the respective file not being created. 

`





}

module.exports = generateMarkdown;
