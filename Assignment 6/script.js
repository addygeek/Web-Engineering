// 🚀 Debounce Function
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

// Handling Debounce Function on Input Field
const debounceInput = document.getElementById("debounceInput");
const debounceOutput = document.getElementById("debounceOutput");

if (debounceInput) {
    const updateText = debounce((e) => {
        debounceOutput.textContent = `You typed: ${e.target.value}`;
    }, 500);
    debounceInput.addEventListener("input", updateText);
}

// 🚀 Sorting Function
function sortByKey(array, key) {
    return array.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

// Handling Sorting Function UI
function sortObjects() {
    const input = document.getElementById("sortInput").value;
    const key = document.getElementById("sortKey").value;
    const output = document.getElementById("sortOutput");

    try {
        const data = JSON.parse(input);
        if (!Array.isArray(data) || data.length === 0 || !data[0].hasOwnProperty(key)) {
            output.textContent = "Invalid input or key!";
            return;
        }

        const sortedData = sortByKey(data, key);
        output.textContent = JSON.stringify(sortedData, null, 2);
    } catch (error) {
        output.textContent = "Error: Invalid JSON format!";
    }
}

// 🚀 Deep Clone Function
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Handling Deep Clone UI
function testDeepClone() {
    const obj = { name: "John", age: 30, address: { city: "NY", country: "USA" } };
    const clonedObj = deepClone(obj);

    clonedObj.name = "Doe"; // Modify cloned object to prove it's a deep copy

    document.getElementById("cloneOutput").textContent =
        `Original: ${JSON.stringify(obj)}\nCloned: ${JSON.stringify(clonedObj)}`;
}

// 🚀 Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    return merged;
}

// Handling Merge Sorted Arrays UI
function mergeArrays() {
    const array1 = document.getElementById("array1").value.split(",").map(Number);
    const array2 = document.getElementById("array2").value.split(",").map(Number);
    const output = document.getElementById("mergeOutput");

    if (array1.some(isNaN) || array2.some(isNaN)) {
        output.textContent = "Invalid input! Enter numbers separated by commas.";
        return;
    }

    const mergedArray = mergeSortedArrays(array1, array2);
    output.textContent = `Merged Array: ${JSON.stringify(mergedArray)}`;
}
