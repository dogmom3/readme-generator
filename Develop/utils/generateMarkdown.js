// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('license', license);
  let licenseBadge = [];
  if (license.includes('Apache 2.0 License')) {
    licenseBadge.push('![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)')
    // return.push '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  }
  if (license.includes('Boost Software License 1.0')) {
    licenseBadge.push('![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)')
  }
  if (license.includes('BSD 3-Clause License')) {
    licenseBadge.push('![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)')
  }
if(licenseBadge.length === 0) {
  return ''
} else {
  return licenseBadge
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license, includes('Apache 2.0 License')) {
    return '[![License: ${license}](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license.includes('Boost Software License 1.0')) {
    return '[![License: ${license}](https://boost.org/LICENSE_1_0.txt)';
  }
  if (license.includes('BSD 3-Clause License')) {
    return '[![License: ${license}](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return '';
  }
  else {
    return `${renderLicenseLink(license)}
  ${renderLicenseBadge(license)}`;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log('test', renderLicenseBadge(data.license))
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
  ;`
}

module.exports = generateMarkdown;
