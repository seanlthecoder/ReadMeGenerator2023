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


## Table of Contents

* [Description](#description)

  
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
${data.Installation}
To install the dependencies needed for this project, you would need to utilize npm install.



### Usage
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

`





}

module.exports = generateMarkdown;
