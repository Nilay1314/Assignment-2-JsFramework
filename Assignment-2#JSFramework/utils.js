// utils.js

// Function 1: Print a customized welcome message
function welcomeMessage(...names) {
    console.log(`Welcome ${names.join(' ')} to our project presentation. Hope you will like it.`);
  }
  
  // Function 2: Calculate the area of a circle given the radius
  function circleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Function 3: Calculate the nth Fibonacci number
  function fibonacci(n) {
    let [a, b] = [0, 1];
    while (n-- > 0) {
      [a, b] = [b, a + b];
    }
    return a;
  }
  
  // Function 4: Generate a simple greeting based on the time of day
  function timeBasedGreeting(hour) {
    if (hour >= 5 && hour <= 11) {
      return 'Good Morning';
    } else if (hour >= 12 && hour <= 16) {
      return 'Good Afternoon';
    } else if (hour >= 17 && hour <= 20) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };
  
  //Exporting functions
  module.exports = { welcomeMessage, circleArea, fibonacci, timeBasedGreeting };