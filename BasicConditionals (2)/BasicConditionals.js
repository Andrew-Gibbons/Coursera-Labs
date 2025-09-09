// User's age
let age = 12;
// Check if user is old enough
if (age >= 13) {
console.log("Welcome! You can access the website.");
}
else {
    console.log("Sorry, you are too young to access the website.");
}

// Add a message if they can't access
console.log("Age verification complete.");
// Try different ages to see what happens!

// Login information
let username = "student123";
let password = "learn2024";

if (username === "student123" && password === "learn2024") {
    console.log("Login successful! Welcome, " + username + ".");
} else {
    console.log("Login failed. Please check your username and password.");
}

// Order information
let orderTotal = 45;
let destination = "domestic";
let shippingCost;

if (destination === "domestic") {
    if (orderTotal > 50) {
        shippingCost = 0;
    } else if (orderTotal >= 25) {
        shippingCost = 5;
    } else {
        shippingCost = 10;
    }
} else if (destination === "international") {
    if (orderTotal > 100) {
        shippingCost = 0;
    } else if (orderTotal >= 50) {
        shippingCost = 15;
    } else {
        shippingCost = 25;
    }
} else {
    shippingCost = "Unknown destination";
}

console.log("Order total: $" + orderTotal);
console.log("Shipping cost: $" + shippingCost);

// Menu selection
let choice = "burger";

switch (choice) {
    case "burger":
        console.log("You ordered a burger.");
        console.log("Price: $10");
        console.log("Preparation time: 15 mins");
        console.log("Main ingredients: beef patty, lettuce, tomato, bun");
        break;
    case "pizza":
        console.log("You ordered a pizza.");
        console.log("Price: $12");
        console.log("Preparation time: 20 mins");
        console.log("Main ingredients: dough, tomato sauce, cheese");
        break;
    case "salad":
        console.log("You ordered a salad.");
        console.log("Price: $8");
        console.log("Preparation time: 10 mins");
        console.log("Main ingredients: lettuce, tomato, cucumber, dressing");
        break;
    default:
        console.log("Invalid menu choice. Please select burger, pizza, or salad.");
}