// Item prices
let coffeePrice = 5;
let sandwichPrice = 8;
let cookiePrice = 2;
let muffinPrice = 3;

// Calculate quantities
let coffeeQuantity = 2;
let sandwichQuantity = 1;
let cookieQuantity = 3;
let muffinQuantity = 2;

// Calculate subtotals
let coffeeTotal = coffeePrice * coffeeQuantity;
let sandwichTotal = sandwichPrice * sandwichQuantity;
let cookieTotal = cookiePrice * cookieQuantity;
let muffinTotal = muffinPrice * muffinQuantity;

// Calculate final total
let cartTotal = coffeeTotal + sandwichTotal + cookieTotal + muffinTotal;

// Display the receipt
console.log("=== Shopping Cart ===");
console.log("Coffee: $" + coffeeTotal);
console.log("Sandwich: $" + sandwichTotal);
console.log("Cookies: $" + cookieTotal);
console.log("Muffins: $" + muffinTotal);
console.log("Total: $" + cartTotal);

// Original price and discount information
let shirtPrice = 45;
let discountPercent = 30;

// Calculate the discount amount and final price below
// Hint: First convert the percentage to decimal form
// Your code here:
let discountDecimal = discountPercent / 100;
let discountAmount = shirtPrice * discountDecimal;
let finalPrice = shirtPrice - discountAmount;

// Display calculations
console.log("=== Discount Calculator ===");
console.log("Original Price: $" + shirtPrice);
console.log("Discount Percentage: " + discountPercent + "%");
// Add your console.log statements to show the discount amount and final price
console.log("Discount Amount: $" + discountAmount);
console.log("Final Price: $" + finalPrice);

// Product information
let productName = "Wireless Mouse";
let price = 29.99;
let quantity = 2;
// Calculate subtotal
// Your code here:
// Format and display the receipt
// Hint: Think about spacing and alignment
console.log("=== Product Receipt ===");
let subtotal = price * quantity;

// Helper function to pad strings for alignment
function pad(str, length) {
    return str + " ".repeat(Math.max(0, length - str.length));
}

const labelWidth = 10;
const valueWidth = 15;

console.log(pad("Product:", labelWidth) + pad(productName, valueWidth));
console.log(pad("Price:", labelWidth) + "$" + price.toFixed(2).padStart(valueWidth - 1));
console.log(pad("Quantity:", labelWidth) + String(quantity).padStart(valueWidth));
console.log(pad("Subtotal:", labelWidth) + "$" + subtotal.toFixed(2).padStart(valueWidth - 1));
// Include: product name, price, quantity, and subtotal