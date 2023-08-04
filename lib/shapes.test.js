const shape = require("./shapes.js");

// define the conditions for the testing suite for each shape, including expected output given particular inputs

describe('Circle', () => {
    test('should create svg text for a circle and populate with colour and text parameters', () => {
      const expectedSVG =
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<circle cx="150" cy="100" r="80" fill="blue"/>
<text x="150" y="125" font-family="arial" font-size="70" text-anchor="middle" fill="red">TTT</text>
</svg>`;
      const newShape = new shape.Circle("blue", "red", "TTT");
      expect(newShape.render()).toEqual(expectedSVG);
    });
});

describe('Square', () => {
    test('should create svg text for a square and populate with colour and text parameters', () => {
      const expectedSVG =
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<rect x="50" y="0" width="200" height="200" fill="black"/>
<text x="150" y="125" font-family="arial" font-size="70" text-anchor="middle" fill="yellow">DjH</text>
</svg>`;
      const newShape = new shape.Square("black", "yellow", "DjH");
      expect(newShape.render()).toEqual(expectedSVG);
    });
});

describe('Triangle', () => {
    test('should create svg text for a triangle and populate with colour and text parameters', () => {
      const expectedSVG =
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<polygon points="150,0 265.47,200 34.53,200" fill="#ff66ff" />
<text x="150" y="125" font-family="arial" font-size="70" text-anchor="middle" dominant-baseline="hanging" fill="#6600cc">PnP</text>
</svg>`;
      const newShape = new shape.Triangle("#ff66ff", "#6600cc", "PnP");
      expect(newShape.render()).toEqual(expectedSVG);
    });
});
