import { SVG } from '@svgdotjs/svg.js';

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }

//   mapTextSize(textSize) {
//     switch (textSize) {
//       case 'Small': return 10;
//       case 'Medium': return 20;
//       case 'Large': return 30;
//       default: return 20;
//     }
//   }
// }

class Shape {
  constructor(draw, color) {
    this.draw = draw;
    this.color = color;
  }

  drawStyledText(draw, text, textColor, textStyle, textSize, fontFamily, fontStyle) {
    let cssTextStyle = 'normal';
    let cssFontStyle = 'normal';
    let cssTextDecoration = 'none';

    switch (textStyle) {
      case 'Bold':
        cssTextStyle = 'bold';
        break;
      case 'Italic':
        cssFontStyle = 'italic';
        break;
      case 'Underline':
        cssTextDecoration = 'underline';
        break;
    }

    draw.text(text)
      .move(375, 250) // Center text
      .fill(textColor)
      .font({
        "text-anchor": "middle",
        "font-family": fontFamily,
        "font-size": textSize,
        "font-weight": cssTextStyle,
        "font-style": cssFontStyle,
        "text-decoration": cssTextDecoration,
      });
  }
}

class Triangle extends Shape {
  generateLogo(draw, text, textColor, textStyle, textSize, fontFamily, fontStyle) {
    draw.rect(750, 500).fill('white'); // Background rectangle

    draw.polygon('375,50 700,450 50,450').fill(this.color); // Adjusted triangle size and position

    this.drawStyledText(draw, text, textColor, textStyle, textSize, fontFamily, fontStyle);
  }
}

class Circle extends Shape {
  generateLogo(draw, text, textColor, textStyle, textSize, fontFamily, fontStyle) {
    draw.rect(750, 500).fill('white'); // Background rectangle

    draw.circle(400).move(175, 50).fill(this.color); // Adjusted circle size and position

    this.drawStyledText(draw, text, textColor, textStyle, textSize, fontFamily, fontStyle);
  }
}

class Square extends Shape {
  generateLogo(draw, text, textColor, textStyle, textSize, fontFamily, fontStyle) {
    draw.rect(750, 500).fill('white'); // Background rectangle

    draw.rect(300, 300).move(225, 100).fill(this.color); // Adjusted square size and position

    this.drawStyledText(draw, text, textColor, textStyle, textSize, fontFamily, fontStyle);
  }
}

export { Triangle, Circle, Square };