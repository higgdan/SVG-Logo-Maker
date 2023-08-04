// import required packages and dependancies
const inquirer = require('inquirer');
const fs = require('fs');
const shape = require("./lib/shapes.js");


// define question prompts
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
      choices: ['Circle', 'Square', 'Triangle']

    },
    {
      type: 'input',
      name: 'svgLogoColour',
      message: "What is the shape's colour?",
    }
  ])
  .then((answers) => {
// conditionals to determine which class constructor to invoke
    if (answers.svgLogoShape === "Circle") {
      return new shape.Circle(answers.svgLogoColour, answers.svgTextColour, answers.svgTextChar)
    }
    if (answers.svgLogoShape === "Square") {
      return new shape.Square(answers.svgLogoColour, answers.svgTextColour, answers.svgTextChar)
    }
    if (answers.svgLogoShape === "Triangle") {
      return new shape.Triangle(answers.svgLogoColour, answers.svgTextColour, answers.svgTextChar)
    }
  })
  .then((shape) => {
// write file to output folder, using the spapes' render method to populate the text to write to file
    fs.writeFile('./output/logo.svg', shape.render(), (err) =>
      err ? console.log(err) : console.log("Generated logo.svg in output folder"))
  })