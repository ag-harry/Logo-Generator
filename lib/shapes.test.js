import { Circle, Triangle, Square } from './shapes.mjs';

test('Circle render method returns correct SVG string', () => {
    const circle = new Circle('red');
    expect(circle.render('ABC', 'white')).toBe('<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <circle cx="100" cy="100" r="80" fill="red" />\n' +
        '    <text x="100" y="100" text-anchor="middle" fill="white">ABC</text>\n' +
        '</svg>');
});

test('Square render method returns correct SVG string', () => {
    const square = new Square('blue');
    expect(square.render('DEF', 'black')).toBe('<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <rect width="160" height="160" x="20" y="20" fill="blue" />\n' +
        '    <text x="100" y="100" text-anchor="middle" fill="black">DEF</text>\n' +
        '</svg>');
});

test('Triangle render method returns correct SVG string', () => {
    const triangle = new Triangle('green');
    expect(triangle.render('GHI', 'yellow')).toBe('<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <polygon points="100,10 190,180 10,180" fill="green" />\n' +
        '    <text x="100" y="100" text-anchor="middle" fill="yellow">GHI</text>\n' +
        '</svg>');
});
