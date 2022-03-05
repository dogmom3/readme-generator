// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license.includes('Apache 2.0 License')) {

  }
  if(license.includes('Boost Software License 1.0')) {

  }
  if(license.includes('BSD 3-Clause License')) {

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
  ## Project Description ${data.description}
  ## Table of Contents
  -[Installation](#Installation-Process)
  -[Instructions](#Usage-Instructions)
  -[License](#License)
  -[How to Contribute](#How-to-Contribute)
  -[Testing](#Testing)
  -[Contact](#Contact-Information)

  ## Installation Process ${data.installation}
  ## Usage Instructions ${data.usage}
  ## License ${data.license}
  ## How to Contribute ${data.contributers}
  ## Testing ${data.tests}
  ## Contact Information 
  ### Please feel free to contact me with any questions about this project. I can be reached by email at: ${data.email}
  ### To view more of my projects, check out my GitHub profile here: https://github.com/${data.link}
  `;
}

module.exports = generateMarkdown;
