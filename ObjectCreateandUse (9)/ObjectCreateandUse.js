// Create a user profile object
let userProfile = {
    name: "Sarah Johnson",
    age: 25,
    email: "sarah.j@email.com",
    isStudent: true
};
// Show the entire profile
console.log("User Profile:");
console.log(userProfile);
// Show specific information
console.log("Name: " + userProfile.name);
console.log("Age: " + userProfile.age);
console.log("Email: " + userProfile.email);

// Create a product object
let product = {
    name: "Laptop",
    price: 799.99,
    inStock: true
};
// Change the price
product.price = 699.99;
// Add a new property
product.brand = "TechBrand";
// Show updated product
console.log("Product Information:");
console.log(product);

// Create a book object
let book = {
    title: "JavaScript Essentials",
    author: "Alex Green",
    year: 2022,
    isAvailable: true
};
// Show the book object
console.log("Book Information:");
console.log(book);

// Create an array of book objects
let books = [
    { title: "JavaScript Essentials", author: "Alex Green", isCheckedOut: false },
    { title: "Learning Python", author: "Maria Smith", isCheckedOut: true },
    { title: "Web Development Basics", author: "Alex Green", isCheckedOut: false },
    { title: "Data Structures", author: "John Doe", isCheckedOut: true }
];

// 1. Display all books
function displayAllBooks() {
    console.log("All Books:");
    books.forEach(book => {
        console.log(`${book.title} by ${book.author} - Checked Out: ${book.isCheckedOut}`);
    });
}

// 2. Find books by a specific author
function findBooksByAuthor(authorName) {
    return books.filter(book => book.author === authorName);
}

// 3. List only available books
function listAvailableBooks() {
    return books.filter(book => !book.isCheckedOut);
}

// Example usage:
displayAllBooks();
console.log("Books by Alex Green:", findBooksByAuthor("Alex Green"));
console.log("Available Books:", listAvailableBooks());

