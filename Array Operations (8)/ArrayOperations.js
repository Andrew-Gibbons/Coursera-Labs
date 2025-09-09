// Create a shopping list array
let shoppingList = ["milk", "bread", "eggs", "apples"];
// Show entire list
console.log("My Shopping List:");
console.log(shoppingList);
// Show first item
console.log("First item to buy: " + shoppingList[0]);
// Show last item
console.log("Last item to buy: " + shoppingList[3]);
// Incorrect array value
console.log("Last item to buy: " + shoppingList[4]);
// Show how many items are in the list
console.log("Number of items: " + shoppingList.length);

// Create a todo list array
let todoList = ["Study JavaScript", "Go shopping", "Call mom"];
// Add a new task using push
todoList.push("Clean room");
// Change an existing task
todoList[1] = "Buy groceries";
// Show the updated list
console.log("My Todo List:");
console.log(todoList);

// Arrays have numbered positions starting at 0
let colors = ["red", "green", "blue", "yellow", "purple"];
// First position is always 0
console.log("First color:", colors[0]);  // red
// Last position is length - 1
console.log("Last color:", colors[colors.length - 1]);  // purple
// Finding the middle position requires division and rounding down
let middlePosition = Math.floor(colors.length / 2);
console.log("Middle position:", middlePosition);  // 2
console.log("Middle color:", colors[middlePosition]);  // blue

// Math.floor() rounds down to the nearest integer
console.log(Math.floor(3.7));  // 3
console.log(Math.floor(5.1));  // 5
// Math.ceil() rounds up to the nearest integer
console.log(Math.ceil(3.2));   // 4
console.log(Math.ceil(5.9));   // 6
// Math.round() rounds to the nearest integer
console.log(Math.round(3.2));  // 3
console.log(Math.round(3.8));  // 4
// Finding minimum and maximum values
console.log(Math.min(10, 5, 8));  // 5
console.log(Math.max(10, 5, 8));  // 10
// Format a number to show exactly 2 decimal places
let price = 10.9876;
console.log(price.toFixed(2));  // "10.99" (as a string)

// Create an array of test scores
let testScores = [85, 92, 78, 95, 88];
// 1. Find how many scores there are
console.log("Number of test scores:", testScores.length);
// 2. Get the first and last scores
console.log("First score:", testScores[0]);
console.log("Last score:", testScores[testScores.length - 1]);
// 3. Add a new score
testScores.push(91);
console.log("Updated test scores:", testScores);

// Create an array of prices
let prices = [10.99, 5.99, 3.99, 8.99];
let total = 0;
console.log("Prices:");
for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
    total += prices[i];
}
console.log("Total price:", total.toFixed(2));

let cheapPrices = [];
for (let i = 0; i < prices.length; i++) {
    if (prices[i] < 7.00) {
        cheapPrices.push(prices[i]);
    }
}
console.log("Prices less than 7.00:", cheapPrices);

