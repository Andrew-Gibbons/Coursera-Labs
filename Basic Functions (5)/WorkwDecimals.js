// Using toFixed() to format to 2 decimal places
let price = 10.567;
console.log(price.toFixed(2));  // "10.57" (rounds to 2 decimal places as a string)

// Converting back to a number
let formattedPrice = Number(price.toFixed(2));
console.log(formattedPrice);  // 10.57 (as a number)

// Math.round() method for whole numbers
console.log(Math.round(10.2));  // 10
console.log(Math.round(10.8));  // 11

// Math.round() trick for specific decimal places
// To round to 2 decimal places: multiply by 100, round, then divide by 100
let tipAmount = 7.567;
let roundedTip = Math.round(tipAmount * 100) / 100;
console.log(roundedTip);  // 7.57
// To round to 3 decimal places: multiply by 1000, round, then divide by 1000
let seconds = 3.14159;

// Format as currency with toFixed()
let amount = 49.9999;
let formatted = "$" + amount.toFixed(2);
console.log(formatted);  // "$50.00"

// Handling different currencies
let euroAmount = 29.95;
let euroFormatted = "€" + euroAmount.toFixed(2);
console.log(euroFormatted);  // "€29.95"
