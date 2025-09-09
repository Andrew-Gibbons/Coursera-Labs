// Count from 1 to 5
let count;
for (let count = 1; count < 10; count++) {
    console.log(count);
}
console.log("Number: " + count)
console.log("Counting complete!");

// Keep adding numbers until we reach 10
let sum = 0;
let target = 20;
let loopCount = 0;
while (sum < target) {
    sum = sum + 3;
    loopCount++;
    console.log("Sum is now: " + sum);
}
console.log("The loop ran " + loopCount + " times.");
console.log("Reached the target!");

// Write a loop that counts to 10
// Add an if/else to show "Halfway!" at 5
// Your code here:
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Halfway!");
    }
    console.log("Count is: " + i);
}
// Don't forget a completion message!
console.log("Counting to 10 complete!");

// Write a loop to find even numbers from 1 to 6
// Your code here:
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        console.log("Even number found: " + i);
    }
}
// Don't forget to show how many even numbers were found!
console.log("Total even numbers found: " + (6 / 2));
console.log(4 % 2);  // Should show 0 (even number)
console.log(5 % 2);  // Should show 1 (odd number)

