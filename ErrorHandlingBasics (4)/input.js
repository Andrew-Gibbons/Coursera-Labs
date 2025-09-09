// Load the readline-sync library
let readline = require('readline-sync');
// Get input from the user
let color = readline.question("What is your favorite color? ");
// Show the input
console.log("Your favorite color is " + color + "!");

// Try to multiply text (this will cause an error)
try {
    let result = 5 * 5;
    console.log("Result:", result);
} catch (error) {
    console.log("Oops! Something went wrong:", error.message);
}
console.log("The program continues running!");

// Create a number for the user to guess
let secretNumber = 7;
// Get the user's guess
let userGuess = readline.question("Guess a number between 1 and 10: ");

try {
    // Convert string to number
    let numberGuess = Number(userGuess);

    // Check if it's actually a number
    if (isNaN(numberGuess)) {
        throw "That's not a number!";
}
    // Check if number is in range
    if (numberGuess < 1 || numberGuess > 10) {
        throw "Number must be between 1 and 10!";
}

    // Check if guess is correct
    if (numberGuess === secretNumber) {
        console.log("Congratulations! You guessed correctly!");
    } else {
        console.log("Sorry, the number was " + secretNumber);
}
} catch (error) {
    console.log("Error: " + error);
}

// Get the age
let age = readline.question("What is your age? ");
// Add your validation code here
try {
    if (age.trim() === "") {
        throw "Age cannot be empty!";
    }
    let ageNum = Number(age);
    if (isNaN(ageNum)) {
        throw "Age must be a number!";
    }
    if (ageNum < 0 || ageNum > 120) {
        throw "Age must be between 0 and 120!";
    }
    if (ageNum >= 16) {
        console.log("You are old enough to drive!");
    } else {
        console.log("You are not old enough to drive.");
    }
} catch (error) {
    console.log("Error: " + error);
}
