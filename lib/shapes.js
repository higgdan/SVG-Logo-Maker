class Shape {
  constructor(svgLogoColour, svgTextColour, svgTextChar) {
    this.svgLogoColour = svgLogoColour;
    this.svgTextColour = svgTextColour;
    this.svgTextChar = svgTextChar;
  }
}

class Circle extends Shape {
  constructor(svgLogoColour, svgTextColour, svgTextChar) {
    super (svgLogoColour, svgTextColour, svgTextChar);
  }
// returns a string with colour and text parameters, wrapped with () brackets to preserve line breaks in output .svg file
  render() { return (
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<circle cx="150" cy="100" r="80" fill="${this.svgLogoColour}"/>
<text x="150" y="125" font-family="arial" font-size="70" text-anchor="middle" fill="${this.svgTextColour}">${this.svgTextChar}</text>
</svg>`)
  }
}

class Square extends Shape {
  constructor(svgLogoColour, svgTextColour, svgTextChar) {
    super (svgLogoColour, svgTextColour, svgTextChar);
  }
  render() { return (
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<rect x="50" y="0" width="200" height="200" fill="${this.svgLogoColour}"/>
<text x="150" y="125" font-family="arial" font-size="70" text-anchor="middle" fill="${this.svgTextColour}">${this.svgTextChar}</text>
</svg>`)
  }
}

class Triangle extends Shape {
  constructor(svgLogoColour, svgTextColour, svgTextChar) {
    super (svgLogoColour, svgTextColour, svgTextChar);
  }
  render() { return (
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<polygon points="150,0 265.47,200 34.53,200" fill="${this.svgLogoColour}" />
<text x="150" y="125" font-family="arial" font-size="70" text-anchor="middle" dominant-baseline="hanging" fill="${this.svgTextColour}">${this.svgTextChar}</text>
</svg>`)
  }
}

module.exports = {Circle, Square, Triangle}