// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/MIT-License-yellow)]`;
  } else if (license === "APACHE-2.0") {
    return `[![License](https://img.shields.io/badge/APACHE-License-yellow)]`;
  } else if (license === "ISC") {
    return `[![License](https://img.shields.io/badge/ISC-License-yellow)]`;
  } else if (license === "GNU") {
    return `[![License](https://img.shields.io/badge/GNU-License-yellow)]`;
  } else return ''
}
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
