// // QNS 1 :  Create an anonymous function that calls the recursive factorial function and displays the result.

// // Start a countdown from 10 to 1 and then display "Happy New Year" message
// (function() {
//     let countdown = 10; // Initialize countdown value
  
//     // Function to display the countdown and handle transition to "Happy New Year"
//     (function countdownTimer() {
//       if (countdown > 0) {
//         console.log(countdown);
//         countdown--;
//         setTimeout(countdownTimer, 1000); // Call the countdownTimer function every second
//       } else {
//         // Once countdown reaches 0, display "Happy New Year"
//         (function displayMessage() {
//           console.log("Happy New Year!"); // Display the message
//         })();
//       }
//     })(); // Immediately invoke the countdownTimer function to start the countdown
//   })();
  


  //QNS 2 : Write a recursive function to calculate the factorial of a number.

  // Recursive function to calculate factorial of a number
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n <= 1) {
      return 1;
    }
    // Recursive case: factorial of n is n * factorial of (n-1)
    return n * factorial(n - 1);
  }
  
  // Anonymous function to call the recursive factorial function and display the result
  (function() {
    let number = 5; // Example number for factorial calculation
    let result = factorial(number); // Call the recursive function to get the factorial
    console.log(`The factorial of ${number} is: ${result}`); // Display the result
  })();
  

  // QNS 3 : Online Shopping Flow with Callback Chaining

  // 1. Add items to cart (Callback 1)
function addToCart(items, callback) {
    setTimeout(() => {
      console.log("Items added to cart:", items);
      callback(items); // Pass the items to the next callback
    }, 1000); // Simulate asynchronous action (e.g., adding items to cart takes 1 second)
  }
  
  // 2. Calculate total price (Callback 2)
  function calculateTotalPrice(items, callback) {
    setTimeout(() => {
      let total = 0;
      for (let item of items) {
        total += item.price;
      }
      console.log("Total price calculated:", total);
      callback(total); // Pass the total price to the next callback
    }, 1000); // Simulate asynchronous action (calculating price takes 1 second)
  }
  
  // 3. Make payment and confirm the order (Callback 3)
  function makePayment(totalPrice, callback) {
    setTimeout(() => {
        console.log("You have purchased these items : ", itemsInCart.forEach(ele => console.log(ele.name)));
      console.log("Payment of " + totalPrice + " processed successfully.");
      callback(); // Once payment is successful, call the next callback
    }, 1000); // Simulate asynchronous action (payment processing takes 1 second)
  }
  
  // 4. Display confirmation message (Callback 4)
  function displayConfirmationMessage(callback) {
    setTimeout(() => {
      console.log("Your order has been confirmed. Thank you for shopping with us!");
      callback(); // Final callback to indicate the whole process is complete
    }, 1000); // Simulate asynchronous action (confirmation message display takes 1 second)
  }
  
  // Simulate the entire shopping flow using callback chaining
  const itemsInCart = [
    { name: "Shirt", price: 20 },
    { name: "Jeans", price: 40 },
    { name: "Shoes", price: 60 }
  ];
  
  // Chain the callbacks to execute the shopping flow
  addToCart(itemsInCart, function(items) {
    calculateTotalPrice(items, function(total) {
      makePayment(total, function() {
        displayConfirmationMessage(function() {
          console.log("Shopping process completed!");
        });
      });
    });
  });
  
// QNS 4 : Static Class Method and Instance Method Shadowing
  // Parent class with static and instance methods
class Parent {
    // Static method
    static staticMethod() {
      console.log("This is a static method in the Parent class.");
    }
  
    // Instance method
    instanceMethod() {
      console.log("This is an instance method in the Parent class.");
    }
  }
  
  // Child class that shadows methods from the Parent class
  class Child extends Parent {
    // Static method shadowing the Parent class's static method
    static staticMethod() {
      console.log("This is a static method in the Child class.");
    }
  
    // Instance method shadowing the Parent class's instance method
    instanceMethod() {
      console.log("This is an instance method in the Child class.");
    }
  }
  
  // Testing the static and instance methods
  
  // Calling the static methods
  Parent.staticMethod();  // "This is a static method in the Parent class."
  Child.staticMethod();   // "This is a static method in the Child class."
  
  // Calling the instance methods
  const childInstance = new Child();
  childInstance.instanceMethod();  // "This is an instance method in the Child class."
  
  // Calling the parent class instance method from a parent instance
  const parentInstance = new Parent();
  parentInstance.instanceMethod();  // "This is an instance method in the Parent class."
  