// script.js

// ********** Number Guessing Game **********
let targetNumber, remainingTries = 5, guesses = [];

function initGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    remainingTries = 5;
    guesses = [];
    updateDisplay();
    showMessage("New game started! Guess a number between 1-100", "success");
}

function checkGuess() {
    const input = document.getElementById('guessInput');
    const guess = parseInt(input.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        return showMessage("Enter a valid number (1-100)", "error");
    }
    if (guesses.includes(guess)) {
        return showMessage("You already guessed that number!", "error");
    }

    guesses.push(guess);
    remainingTries--;

    if (guess === targetNumber) {
        showMessage(`🎉 Correct! The number was ${targetNumber}`, "success");
        initGame();
        return;
    }

    if (remainingTries <= 0) {
        showMessage(`❌ Game over! The number was ${targetNumber}`, "error");
        initGame();
        return;
    }

    showMessage(`Wrong! ${guess > targetNumber ? "Try lower" : "Try higher"}. (${remainingTries} tries left)`, "error");
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('remaining').textContent = `Remaining tries: ${remainingTries}`;
    document.getElementById('guesses').innerHTML = guesses.map(num => `<span class="guess">${num}</span>`).join(' ');
}

function showMessage(text, type) {
    const message = document.getElementById('message');
    message.className = `message ${type}`;
    message.textContent = text;
    message.style.display = 'block';
}

// ********** Binary Search **********
function performBinarySearch() {
    const array = document.getElementById('arrayInput').value
        .split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num))
        .sort((a, b) => a - b);

    const target = parseInt(document.getElementById('targetInput').value);
    let left = 0, right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return showResult(`✅ Found ${target} at index ${mid}`, "success");
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    showResult(`❌ ${target} not found in array`, "error");
}

function showResult(text, type) {
    const result = document.getElementById('bsResult');
    result.className = `message ${type}`;
    result.textContent = text;
    result.style.display = 'block';
}

// ********** Substitution Cipher **********
let cipherKey = generateCipherKey();
document.getElementById('keyDisplay').textContent = `Cipher Key: ${cipherKey}`;

function generateCipherKey() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.split('').sort(() => Math.random() - 0.5).join('');
}

function encodeText() {
    const inputText = document.getElementById('cipherInput').value.toUpperCase();
    let encodedText = '';
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let char of inputText) {
        let index = alphabet.indexOf(char);
        encodedText += index !== -1 ? cipherKey[index] : char;
    }

    document.getElementById('cipherResult').textContent = `Encoded: ${encodedText}`;
}

function decodeText() {
    const inputText = document.getElementById('cipherInput').value.toUpperCase();
    let decodedText = '';
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let char of inputText) {
        let index = cipherKey.indexOf(char);
        decodedText += index !== -1 ? alphabet[index] : char;
    }

    document.getElementById('cipherResult').textContent = `Decoded: ${decodedText}`;
}

initGame();
