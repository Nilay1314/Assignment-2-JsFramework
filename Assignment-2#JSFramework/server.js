// server.js
const { welcomeMessage, circleArea, fibonacci, timeBasedGreeting } = require('./utils');

let radius = 5;
let n = 10;
let hours= 12; //24 hours clock

// Here we are demonstrating the functions
welcomeMessage('Professor', 'Anmar', 'Jarjees');
console.log(`Area of a circle with radius ${radius} is: ${circleArea(radius)}`);
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
console.log(`At ${hours}:00 we greet: ${timeBasedGreeting(hours)}`);
