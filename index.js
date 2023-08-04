const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'svgTextChar',
      message: 'What is the text for the logo? (Limit three characters)',
    },
    {
      type: 'input',
      name: 'svgTextColour',
      message: 'What colour is the text of the logo?',
    },
    {
      type: 'list',
      name: 'svgLogoShape',
      message: 'What shape is the logo?',
      choices: ['circle', 'square', 'triangle']

    },
    {
      type: 'input',
      name: 'svgLogoColour',
      message: "What is the shape's colour?",
    }
  ])
  .then((answers) => {
    console.log(answers);
    console.log("Generated logo.svg in output folder");
  });