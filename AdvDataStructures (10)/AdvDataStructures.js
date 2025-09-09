// Create a product catalog using an array of objects
let productCatalog = [
{
    id: 101,
        name: "Wireless Headphones",
        price: 79.99,
        category: "Electronics",
        inStock: true
    },
    {
        id: 102,
        name: "Running Shoes",
        price: 59.95,
        category: "Footwear",
        inStock: false
    },
    {
        id: 103,
        name: "Coffee Mug",
        price: 12.50,
        category: "Kitchen",
        inStock: true
    },
];
// Display all product names
console.log("Products in catalog:");
for (let i = 0; i < productCatalog.length; i++) {
        console.log(productCatalog[i].name + " - $" + productCatalog[i].price);
}
// Find products in a specific category
console.log("\nElectronics products:");
for (let i = 0; i < productCatalog.length; i++) {
    if (productCatalog[i].category === "Electronics") {
    console.log(productCatalog[i].name);
    }
}

// Create a company structure using nested objects
let company = {
    name: "Tech Innovations Inc",
    founded: 2010,
    departments: {
        engineering: {
            head: "Alex Wong",
            employees: 45,
            teams: ["Frontend", "Backend", "QA"]
        },
        marketing: {
            head: "Sarah Chen",
            employees: 18,
            teams: ["Digital", "Events", "Content"]
        },
        hr: {
            head: "Taylor Johnson", 
            employees: 12,
            teams: ["Recruiting", "Benefits"]
        },
        finance: {
            head: "Morgan Lee",
            employees: 10,
            teams: ["Accounts Payable", "Accounts Receivable", "Payroll"]
        }
    },
    location: {
        city: "San Francisco",
        state: "CA",
        address: "123 Tech Blvd"
    }
};
// Access nested data
console.log("Company: " + company.name);
console.log("Engineering Head: " + company.departments.engineering.head);
console.log("Marketing Teams: " + company.departments.marketing.teams);
console.log("Location: " + company.location.city + ", " + company.location.state);

// Student data with grades for different subjects
let studentRecords = [
    {
        name: "Emma Wilson",
        id: "ST1001",
        grades: {
            math: 90,
            science: 85,
            english: 92
        }
    },
    {
        name: "Michael Brown",
        id: "ST1002",
        grades: {
            math: 78,
            science: 95,
            english: 84
        }
    },
    {
        name: "Sophia Martinez",
        id: "ST1003",
        grades: {
            math: 88,
            science: 82,
            english: 96
        }
    }
];

// Function to calculate and display each student's average grade, highest grade, and subject with highest score
function printStudentStats(records) {
    // Calculate averages and sort students by average grade (descending)
    let studentsWithAvg = records.map(student => {
        let grades = Object.values(student.grades);
        let avg = grades.reduce((sum, val) => sum + val, 0) / grades.length;
        return { ...student, avg };
    });

    studentsWithAvg.sort((a, b) => b.avg - a.avg);

    for (let student of studentsWithAvg) {
        let grades = student.grades;
        let entries = Object.entries(grades);
        let [highestSubject, highestGrade] = entries.reduce(
            (max, curr) => curr[1] > max[1] ? curr : max
        );
        console.log(
            `${student.name} (ID: ${student.id}) - Average Grade: ${student.avg.toFixed(2)}, ` +
            `Highest Grade: ${highestGrade} (${highestSubject})`
        );
    }
}

printStudentStats(studentRecords);

// Shopping cart system

// User cart object
let userCart = {
    items: [], // Each item: { productId, quantity }
};

// Function to add item to cart
function addToCart(productId, quantity = 1) {
    let product = productCatalog.find(p => p.id === productId && p.inStock);
    if (!product) {
        console.log("Product not found or out of stock.");
        return;
    }
    let cartItem = userCart.items.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        userCart.items.push({ productId, quantity });
    }
    console.log(`${product.name} added to cart.`);
}

// Function to remove item from cart
function removeFromCart(productId, quantity = 1) {
    let index = userCart.items.findIndex(item => item.productId === productId);
    if (index === -1) {
        console.log("Product not in cart.");
        return;
    }
    if (userCart.items[index].quantity > quantity) {
        userCart.items[index].quantity -= quantity;
    } else {
        userCart.items.splice(index, 1);
    }
    console.log(`Product ID ${productId} removed from cart.`);
}

// Function to calculate total price
function calculateCartTotal() {
    let total = 0;
    for (let item of userCart.items) {
        let product = productCatalog.find(p => p.id === item.productId);
        if (product) {
            total += product.price * item.quantity;
        }
    }
    return total;
}

// Function to display cart contents
function displayCart() {
    if (userCart.items.length === 0) {
        console.log("Cart is empty.");
        return;
    }
    console.log("Cart contents:");
    for (let item of userCart.items) {
        let product = productCatalog.find(p => p.id === item.productId);
        if (product) {
            console.log(`${product.name} x${item.quantity} - $${(product.price * item.quantity).toFixed(2)}`);
        }
    }
    console.log("Total: $" + calculateCartTotal().toFixed(2));
}

// Example usage:
addToCart(101, 2);
addToCart(103, 1);
displayCart();
removeFromCart(101, 1);
displayCart();