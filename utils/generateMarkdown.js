// function to generate markdown for README
function generateMarkdown(data) {
  const { userName, email, title, description, license, installation, tests, usage, contributing } = data;
  return `# ${title}
  ##Description

  ${description}

  ##Table Of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)


  ##Installation

  To install necessary dependencies, run the following command:

  ${installation}

  ##Usage

  ${usage}

  ##License

  ${license}

  ##Contributing

  ${contributing}

  ##Tests

  To run tests, run the following command:

  
  ${tests}
  
  
  ##Questions

  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at my GitHub [${userName}](https://github.com/${userName}/).
   
`;
}

module.exports = generateMarkdown;
