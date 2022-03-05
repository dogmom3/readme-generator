// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  let licenseBadge = [];
  if (license.includes('Apache 2.0 License')) {
    licenseBadge +=
      '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }

  if (license.includes('Boost Software License 1.0')) {
    // licenseBadge =

  }

  if (license.includes('BSD 3-Clause License')) {
    // licenseBadge =

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # ${renderLicenseBadge(data.license)}

  ## Project Description 
  ${data.description}

  ## Table of Contents
  -[Installation](#Installation-Process)
  -[Instructions](#Usage-Instructions)
  -[License](#License)
  -[Contributers](#Contributers)
  -[Testing](#Testing)
  -[Contact](#Contact-Information)

  ## Installation Process 
  ${data.installation}

  ## Usage Instructions 
  ${data.usage}

  ## License 
  ${data.license}

  ## Contributers 
  ${data.contributers}

  ## Testing 
  ${data.tests}

  ## Contact Information 
  ### To view more of my projects, check out my GitHub profile here: https://github.com/${data.username}
  ### Feel free to contact me by email at ${data.email}
  `;
}

module.exports = generateMarkdown;
