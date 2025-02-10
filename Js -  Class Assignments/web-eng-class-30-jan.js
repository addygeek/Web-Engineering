const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is even or odd using a callback
function even(number, callback) {
    // Calculate the remainder when the number is divided by 2
    const e = number % 2;  // 0 means even, 1 means odd
    callback(e);  // Pass the result (0 for even, 1 for odd) to the callback function
}

// Function to print whether the number is even or odd based on the result
function check(e) {
    if (e === 0) {
        console.log("It's even");  // If remainder is 0, it's even
    } else {
        console.log("It's odd");  // If remainder is 1, it's odd
    }
}

// Function to ask the user for two numbers and then process them using a callback
function ask(callback) {
    rl.question("Enter 1st num: ", (n1) => {
        rl.question("Enter 2nd num: ", (n2) => {
            // Convert inputs to integers and pass them to the callback function
            callback(parseInt(n1), parseInt(n2));
        });
    });
}

// Function to calculate the sum of two numbers and pass it to the next callback
function sum(n1, n2, callback) {
    const sum = n1 + n2;  // Calculate the sum of the two numbers
    callback(sum);  // Pass the sum to the next callback function (which will check if it's even or odd)
}

// Start the flow: ask for the numbers, calculate the sum, and check if the sum is even or odd
ask(function(n1, n2) {
    // Once we have the numbers, calculate the sum
    sum(n1, n2, function(sumResult) {
        // Once we have the sum, check if it is even or odd
        even(sumResult, check);  // Pass the sum to the `even` function, which calls `check` as the callback

        // Close the readline interface after all operations are complete
        rl.close();
    });
});
