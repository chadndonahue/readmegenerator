// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license[0] === "MIT") {
    return `![GitHub License](https://img.shields.io/badge/license-MIT-yellow)`;
  } else if (license[0] === "APACHE-2.0") {
    return `![GitHub License](https://img.shields.io/badge/license-APACHE-yellow)`;
  } else if (license[0] === "ISC") {
    return `![GitHub License](https://img.shields.io/badge/license-ISC-yellow)`;
  } else if (license[0] === "GNU") {
    return `![GitHub License](https://img.shields.io/badge/license-GNU-yellow)`;
  } else return ''
}

// Currently Returning back undefined for licenses ask in class.

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  ## Description
  ${data.description}

  ## Table Of Contents
  ${data.license}
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributions](#contribution)
  [Tests](#tests)

  ## License
  ${renderLicenseBadge(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## GitHub
  ${data.githubProfile}

  ## Email
  ${data.email}

`;
}

module.exports = generateMarkdown;
