// Function 1: Convert a string to title case
function convertToTitleCase() {
    const str = document.getElementById('inputString').value;
    const result = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    document.getElementById('titleCaseResult').textContent = result;
}

// Function 2: Fibonacci sequence with memoization
const fibonacciMemo = (function () {
    const memo = {};
    function fib(n) {
        if (n <= 1) return n;
        if (memo[n]) return memo[n];
        return memo[n] = fib(n - 1) + fib(n - 2);
    }
    return fib;
})();

function generateFibonacci() {
    const n = parseInt(document.getElementById('fibNumber').value);
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fibonacciMemo(i));
    }
    document.getElementById('fibonacciResult').textContent = result.join(', ');
}

// Function 3: Check if two strings are anagrams
function checkAnagram() {
    const str1 = document.getElementById('string1').value;
    const str2 = document.getElementById('string2').value;
    const normalize = str => str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
    const result = normalize(str1) === normalize(str2) ? "The strings are anagrams." : "The strings are not anagrams.";
    document.getElementById('anagramResult').textContent = result;
}

// Function 4: Flatten a nested array
function flattenArrayInput() {
    const input = document.getElementById('nestedArray').value;
    try {
        const arr = JSON.parse(input);
        const flattened = arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
        document.getElementById('flattenResult').textContent = flattened.join(', ');
    } catch (e) {
        document.getElementById('flattenResult').textContent = "Invalid array input.";
    }
}

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

// Function 5: Check if a string is a palindrome
function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value;
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const result = cleanedStr === cleanedStr.split('').reverse().join('') ? "The string is a palindrome." : "The string is not a palindrome.";
    document.getElementById('palindromeResult').textContent = result;
}

// Function 6: Linked List Class
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(value) {
        const newNode = { value, next: this.head };
        this.head = newNode;
    }

    insertAtEnd(value) {
        const newNode = { value, next: null };
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    deleteNode() {
        // Example implementation: Always deletes the first node
        if (this.head) {
            this.head = this.head.next;
        }
    }

    display() {
        let current = this.head;
        let values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values.join(' -> ');
    }
}

const linkedList = new LinkedList();

function insertAtHead() {
    const value = document.getElementById('linkedListValue').value;
    linkedList.insertAtHead(value);
    document.getElementById('linkedListResult').textContent = linkedList.display();
}

function insertAtEnd() {
    const value = document.getElementById('linkedListValue').value;
    linkedList.insertAtEnd(value);
    document.getElementById('linkedListResult').textContent = linkedList.display();
}

function deleteNode() {
    linkedList.deleteNode();
    document.getElementById('linkedListResult').textContent = linkedList.display();
}
