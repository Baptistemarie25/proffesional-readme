// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![badge](https://img.shields.io/static/v1?label=license&message=${license.replace(
      ' ',
      '-'
    )}&color=green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `https://choosealicense.com/licenses/${license
    .toLowerCase()
    .replace(' ','-')}/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    let licenseLink = renderLicenseLink(license);
    return `
  ## License
    
  This project has the ${license} license. 
  You can find the link to this license at: ${licenseLink}
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.projectLicense);
  let licenseSection = renderLicenseSection(data.projectLicense);
  return `# ${data.projectTitle}
  ${licenseBadge}

  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contribution](#contribution)

  [Testing](#testing)

  [Questions](#questions)

  ## Description

  ${data.projectDescription}

  ## Installation

  ${data.installationInstructions}

  ## Usage

  ${data.usageInstructions}

  ${licenseSection}

  ## Contribution

  ${data.contributionInstructions}

  ## Testing

  ${data.projectTests}

  ## Questions

  If you have any further questions, please contact me through either Github or by email.
  Both are listed below. 

  Github: https://github.com/${data.githubUsername}

  Email: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
