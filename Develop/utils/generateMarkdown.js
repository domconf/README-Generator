// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  } else if (license === "GNU GPL v3") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (license === "BSD 3-Clause") {
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  } else if (license === "")
    return ""
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/mit/)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
  } else if (license === "GNU GPL v3") {
    return "[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else if (license === "BSD 3-Clause") {
    return "[BSD 3-Clause](https://opensource.org/licenses/bsd-3-clause/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed with [MIT License](https://opensource.org/license/mit/).`;
  } else if (license === "Apache 2.0") {
    return `This project is licensed with [Apache License 2.0]https://www.apache.org/licenses/LICENSE-2.0`
  } else if (license === "GNU GPL v3") {
    return `This project is licensed with [GNU GPL v3]https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else if (license === "BSD 3-Clause") {
    return `This project is licensed with [BSD 3-Clause License]https://opensource.org/license/bsd-3-clause/`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
