# Project: Calculator

<a href="https://ncontin.github.io/calculator">Live Demo</a>

This is a simple and elegant calculator built with HTML, CSS, and JavaScript. The CSS styling is achieved using Tailwind CSS, a utility-first CSS framework. This calculator can perform basic arithmetic operations like addition, subtraction, multiplication, and division. 

The application handles division by zero and provides clear feedback to the user when such an error occurs. 

## User Interface

The calculator is presented in a neat grid layout with clear and responsive buttons. The interface is divided into two main sections: a display at the top where the input and results are shown, and a set of command buttons below.

Button functionality:

- 0-9 & '.': Display their representative numbers/decimal on the application screen
- '+', '-', 'x', '/': Perform their representative operations on the numbers inputted
- '=': Computes the operation in the expression displayed on the screen
- 'CE': Clears all inputs and resets the calculator
- Backspace: Clears the last entered input or character


## Application Structure

### HTML 

The `index.html` file includes the structure of the application, links to external CSS and JavaScript files, and links to Google Fonts and Font Awesome icons.

### Tailwind CSS 

Tailwind CSS is utilized to style applications swiftly and efficiently. The application is styled using CSS contained in `output.css`, which is generated after building the Tailwind CSS configuration.

### JavaScript 

The logic of the calculator is contained in `script.js`. This file includes functions for performing the basic arithmetic operations and updating the display, along with event listeners for handling user input.
