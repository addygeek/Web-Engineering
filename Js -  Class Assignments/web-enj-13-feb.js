// // //sync and async function
// // console.log("before")
// // setTimeout( () =>
// // {
// //     console.log("user sign in");
// //     setTimeout(()=>
// //     {
// //         console.log("user data");
// //         setTimeout(()=>
// //         {
// //             console.log("user profile");
// //         },0) //just after 0 second of  2nd second
// //     },2000) //2 sec
   
// //     setTimeout(()=>
// //     {
// //         console.log("get product details");
// //     },1000) //1 sec
// // },0)

// //2nd program
// //callback hell -> special object that solve this problem 
// //promise : pending, result and resources
// // 2nd program demonstrating the use of Promises to handle asynchronous operations 
// // and solving callback hell using Promise with different states: pending, resolved, and rejected

// let promise = new Promise(function (resolve, reject) {
//     // A variable `condition` is used to decide if the promise is resolved or rejected
//     var condition = true;  // You can change this value to false to test rejection

//     if (condition) {
//         // If the condition is true, resolve the promise with a success message
//         resolve("Got it done - resolved");
//     } else {
//         // If the condition is false, reject the promise with an error message
//         reject("Rejected done from it");
//     }
// });

// // Using `then()` to handle a resolved promise (successful case)
// promise.then((res) => {
//     // This block runs if the promise is resolved
//     console.log("then > ", res);  // Prints the resolution message: "Got it done - resolved"
// })
// // Using `catch()` to handle a rejected promise (error case)
// .catch((error) => {
//     // This block runs if the promise is rejected
//     console.log("Error that came: ", error);  // Prints the rejection message: "Rejected done from it"
// })
// // Using `finally()` to execute code after either resolving or rejecting the promise
// .finally(() => {
//     // This block will run no matter if the promise was resolved or rejected
//     console.log("Promise has been settled (either resolved or rejected).");
// });

// // The following line will log the current state of the promise, but since promises are asynchronous, 
// // the console log will print a Promise object before it's resolved or rejected.
// console.log(promise);  // Logs the Promise object in its pending state (before resolution or rejection)


// //multiple promises
// // Promise.all example
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 1 resolved"), 1000);  // Resolves after 1 second
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 2 resolved"), 2000);  // Resolves after 2 seconds
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 3 resolved"), 3000);  // Resolves after 3 seconds
// });

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         // This block runs if all promises are resolved
//         console.log("All promises resolved: ", results); // Logs an array of results
//     })
//     .catch((error) => {
//         // This block runs if any promise is rejected
//         console.log("Error occurred: ", error);
//     });


//     //race
//     // Promise.race example
// let promiseA = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise A resolved"), 3000);  // Resolves after 3 seconds
// });

// let promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise B resolved"), 1000);  // Resolves after 1 second
// });

// let promiseC = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise C resolved"), 2000);  // Resolves after 2 seconds
// });

// Promise.race([promiseA, promiseB, promiseC])
//     .then((result) => {
//         // This block runs when the first promise resolves
//         console.log("Race winner: ", result); // Logs "Promise B resolved"
//     })
//     .catch((error) => {
//         // This block runs if any of the promises rejects
//         console.log("Error occurred: ", error);
//     });


// // Chaining multiple promises
// let firstPromise = new Promise((resolve, reject) => {
//     resolve("First promise resolved");
// });

// firstPromise
//     .then((result) => {
//         console.log(result); // Logs: "First promise resolved"
//         return new Promise((resolve, reject) => resolve("Second promise resolved"));
//     })
//     .then((result) => {
//         console.log(result); // Logs: "Second promise resolved"
//         return new Promise((resolve, reject) => resolve("Third promise resolved"));
//     })
//     .then((result) => {
//         console.log(result); // Logs: "Third promise resolved"
//     })
//     .catch((error) => {
//         // This block runs if any promise in the chain is rejected
//         console.log("Error occurred: ", error);
//     });

//     // Using Promise.resolve and Promise.reject
// let resolvedPromise = Promise.resolve("This promise is resolved");
// let rejectedPromise = Promise.reject("This promise is rejected");

// resolvedPromise
//     .then((result) => {
//         console.log(result);  // Logs: "This promise is resolved"
//     });

// rejectedPromise
//     .catch((error) => {
//         console.log(error);  // Logs: "This promise is rejected"
//     });


//     // Promise.allSettled example
// let promiseX = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise X resolved"), 1000);
// });

// let promiseY = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise Y rejected"), 2000);
// });

// let promiseZ = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Z resolved"), 3000);
// });

// Promise.allSettled([promiseX, promiseY, promiseZ])
//     .then((results) => {
//         // This block runs after all promises are settled (resolved or rejected)
//         console.log("Results of all promises: ", results);
//         /*
//         Output: 
//         [
//             { status: "fulfilled", value: "Promise X resolved" },
//             { status: "rejected", reason: "Promise Y rejected" },
//             { status: "fulfilled", value: "Promise Z resolved" }
//         ]
//         */
//     });


//     // Promise.any example
// let promiseP = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise P resolved"), 3000);
// });

// let promiseQ = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise Q rejected"), 1000);
// });

// let promiseR = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise R rejected"), 2000);
// });

// Promise.any([promiseP, promiseQ, promiseR])
//     .then((result) => {
//         // This block runs when the first promise resolves
//         console.log("Any winner: ", result);  // Logs: "Promise P resolved"
//     })
//     .catch((error) => {
//         // This block runs if all promises are rejected
//         console.log("All promises rejected:", error);
//     });





    async function f() {
        return(9);
    }
    // f().then(val=>{
    //     console.log(val);
    // })
    //f()
    const val = await f();
    console.log(f());
    