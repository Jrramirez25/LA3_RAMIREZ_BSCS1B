// Prompt the user to enter the maximum limit of the loops
let maxLimit = parseInt(prompt("Enter the limit of the Double loop:"));

// Use nested for loops to iterate and print the iteration map
for (let i = 0; i < maxLimit; i++) {
    // The outer loop
    for (let j = 0; j < maxLimit; j++) {
        // The inner loop
        // It calculate the added value
        let addedValue = i + j;
        // Log the iteration point and added value to the console
        console.log("[" + i + "] [" + j + "] Added value is " + addedValue);
    }
}