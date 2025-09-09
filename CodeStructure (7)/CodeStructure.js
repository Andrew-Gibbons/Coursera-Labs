// --- Calculator Functions ---
// Functions for basic math operations
// Add two numbers
function add(a, b) {
    return a + b;
}
// Subtract two numbers
function subtract(a, b) {
    return a - b;
}
// Multiply two numbers
function multiply(a, b) {
    return a * b;
}
// Divide two numbers
function divide(a, b) {
    if (b === 0) {
    return "Cannot divide by zero";
}
    return a / b;
}
// Square a number
function square(n) {
  return n * n;
}
// Cube a number
function cube(n) {
  return n * n * n;
}

// --- Main Program ---
// Test each calculator function
console.log("Calculator Results:");
console.log("Addition: " + add(10, 5));
console.log("Subtraction: " + subtract(10, 5));
console.log("Multiplication: " + multiply(10, 5));
console.log("Division: " + divide(10, 5));
console.log("Square: " + square(5));
console.log("Cube: " + cube(3));

// --- Tip Calculator Functions ---
// Calculate tip amount based on price and percentage
function calculateTip(price, tipPercent) {
    return price * (tipPercent / 100);
}
// Calculate total including tip
function calculateTotal(price, tipPercent) {
    return price + calculateTip(price, tipPercent);
}
// Display receipt with price, tip, and total
function printReceipt(price, tipPercent) {
    let finalTip = calculateTip(price, tipPercent);
    let finalTotal = calculateTotal(price, tipPercent);

    console.log("=== Receipt ===");
    console.log("Price: $" + price);
    console.log("Tip: $" + finalTip);
    console.log("Total: $" + finalTotal);
    console.log("==============");
}
// Test the calculator
printReceipt(50, 20);

// --- Grade Variables ---
let subjectName = "Math";
let test1Score = 85;
let test2Score = 92;
let test3Score = 88;
// --- Grade Calculations ---
// Calculate average of three test scores
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
// Convert numeric score to letter grade
function getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}
// Display formatted grade report
function printGradeReport(subject, score1, score2, score3) {
    let average = calculateAverage(score1, score2, score3);
    let letter = getLetterGrade(average);

    console.log("=== Grade Report ===");
    console.log("Subject: " + subject);
    console.log("Test 1: " + score1);
    console.log("Test 2: " + score2);
    console.log("Test 3: " + score3);
    console.log("Average: " + average);
    console.log("Grade: " + letter);
    console.log("===================");
}
// Test with sample grades
printGradeReport(subjectName, test1Score, test2Score, test3Score);