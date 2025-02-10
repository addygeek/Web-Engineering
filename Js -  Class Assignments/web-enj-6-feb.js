console.log("6th Feb")
// fucntion to create object
//A constructor function is just a regular function that initializes an object using the this keyword.

//class person

function person(name, age) {
    this.name = name;
    this.age = age;

    this.displayInfo = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
    this.greet = function() 
    {
        console.log(`Hello ${this.name}, welcome to our website, your Age is ${this.age}.`)
    }
}

// Creating an object using the constructor
const p1 = new person("Aditya",20);
console.log(p1)
console.log(p1.name,p1.age)
const p2 = new person("Rahul", 25);

// Displaying information
p1.displayInfo(); // Output: Name: Aditya, Age: 20
p2.displayInfo(); // Output: Name: Rahul, Age: 25

console.log(p1); // Output: Person { name: 'Aditya', age: 20, displayInfo: [Function (anonymous)] }
console.log(p2); // Output: Person { name: 'Rahul', age: 25, displayInfo: [Function (anonymous)] }
//lets greeet that person
p1.greet();

//supoe we are bulding a banking system, where two class to make where first class is BANK Account, inside that has a static method bankinfo that breturn the bank name
// then it cotains the private property has balance() and private method calcaute interrest 
//it provide a public method get balance to get the baalce after interest 
//first ineherit the bank acc, 2nd shwos the get balance function method to modify how interest modify

// 🚀 Banking System 

// ✅ Base Class: BankAccount
class BankAccount {
    // Static method to return the bank name
    static bankInfo() {
        return "PNB BANK";
    }

    // Private property to store balance 
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance; // Initializing balance
    }

    // Private method to calculate interest (only accessible within the class)
    #calculateInterest() {
        return this.#balance * 0.05; // 5% interest
    }

    // Public method to get the balance after applying interest
    getBalance() {
        const interest = this.#calculateInterest();
        return this.#balance + interest;
    }
}

// ✅ Derived Class: SavingsAccount (inherits from BankAccount)
class SavingsAccount extends BankAccount {
    constructor(initialBalance) {
        super(initialBalance); // Call the parent constructor
    }

    // Overriding getBalance() to modify interest calculation
    getBalance() {
        const parentBalance = super.getBalance(); // Call parent method
        const bonusInterest = parentBalance * 0.02; // Additional 2% interest for savings
        return parentBalance + bonusInterest;
    }
}

// 🏦 Creating an instance of SavingsAccount
const myAccount = new SavingsAccount(1000); // Initial balance: ₹1000

console.log(`Bank Name: ${BankAccount.bankInfo()}`); // Output: XYZ Bank
console.log(`Final Balance (after interest): ₹${myAccount.getBalance()}`);
// Output: Final Balance (after interest): ₹1122




