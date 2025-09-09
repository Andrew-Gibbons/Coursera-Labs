function createGreeting(title, firstName) {
    console.log("Welcome to our website, " + title + ". " + firstName + "!");
}
createGreeting("Ms", "Emily");
createGreeting("Dr", "James");
createGreeting("Prof", "Martinez");

function calculateTip(amount, tipPercent = 15) {
    let tip = Math.round(amount * (tipPercent / 100) * 100) / 100;
    let total = amount + tip;

    console.log("Bill Amount: $" + amount);
    console.log("Tip Percentage: " + tipPercent + "%");
    console.log("Tip Amount: $" + tip);
    console.log("Total: $" + total);
}
calculateTip(50);   // Uses default 15%
calculateTip(50, 20); // Uses 20%

function formatPrice(price, currencySymbol = "$", decimals = 2) {
    if (price < 0) {
        return "Price cannot be negative";
}

let formatted = price.toFixed(decimals);
return currencySymbol + formatted;
}
console.log(formatPrice(29.95));        // "$29.95"
console.log(formatPrice(29.95, "€"));    // "€29.95"
console.log(formatPrice(29.95, "£", 0)); // "£30"

function calculateSubtotal(price, quantity) {
if (price < 0 || quantity < 1) {
    return "Invalid price or quantity";
    }
    return price * quantity;
}
function calculateShipping(subtotal, international = false) {
    if (international) {
    return subtotal > 100 ? 15 : 25;
    }
    return subtotal > 50 ? 0 : 10;
}
function calculateTotal(price, quantity, international = false) {
    let subtotal = calculateSubtotal(price, quantity);
    let shipping = calculateShipping(subtotal, international);
    let total = subtotal + shipping;

    console.log("Subtotal: $" + subtotal);
    console.log("Shipping: $" + shipping);
    console.log("Total: $" + total);
}
// Test orders
calculateTotal(25, 2);           // Domestic order
calculateTotal(25, 2, true);     // International order

