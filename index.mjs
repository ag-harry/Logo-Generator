import {promises as fs} from 'fs';
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.mjs';
import { createSVGWindow } from 'svgdom';
import { SVG, registerWindow } from '@svgdotjs/svg.js';
import sharp from 'sharp';

const window = createSVGWindow();
registerWindow(window, window.document);

async function main() {
  const shapeOptions = ['Triangle', 'Circle', 'Square'];
  const colorOptions = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White'];
  const textStyleOptions = ['Normal', 'Bold', 'Italic', 'Underline'];
  const textSizeOptions = ['24px', '36px', '48px', '60px'];
  const fontFamilyOptions = ['Times New Roman', 'Arial', 'Helvetica', 'Courier New', 'Verdana', 'Georgia'];

  const answers = await inquirer.prompt([
    
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:',
      default: 'Logo',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Choose a color for the text:',
      choices: colorOptions,
    },
    {
    type: 'list',
    name: 'textSize',
    message: 'Choose a size for the text:',
    choices: textSizeOptions,
    },
    {
      type: 'list',
      name: 'textStyle',
      message: 'Choose a style for the text:',
      choices: textStyleOptions,
    },
    {
      type: 'list',
      name: 'fontFamily',
      message: 'Choose a font for the text:',
      choices: fontFamilyOptions,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: shapeOptions,
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Choose a color for the shape:',
      choices: colorOptions,
    },
  ]);

  let ShapeClass;
  switch (answers.shape) {
    case 'Triangle':
      ShapeClass = Triangle;
      break;
    case 'Circle':
      ShapeClass = Circle;
      break;
    case 'Square':
      ShapeClass = Square;
      break;
  }

  const draw = SVG().size(750, 500); // Resize SVG canvas

  const shape = new ShapeClass(draw, answers.shapeColor);
  shape.generateLogo(draw, answers.text, answers.textColor, answers.textStyle, answers.fontFamily, parseInt(answers.textSize), answers.fontStyle);

  const svgString = draw.svg();
  try {
    await fs.writeFile('./examples/logo.svg', svgString);
    const pngBuffer = await sharp(Buffer.from(svgString)).png().toBuffer();
    await fs.writeFile('./examples/logo.png', pngBuffer);
    console.log('Generated logo.svg and logo.png');
  } catch (error) {
    console.error(`Error generating logo: ${error}`);
  }
}

main();
