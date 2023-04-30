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
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
