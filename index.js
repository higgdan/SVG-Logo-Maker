const inquirer = require('inquirer');
const fs = require('fs');
const shape = require("./lib/shapes.js");

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
    fs.writeFile('./output/logo.svg', shape.render(), (err) =>
      err ? console.log(err) : console.log("Generated logo.svg in output folder"))
  })