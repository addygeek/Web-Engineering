// //define array of varible size and perform the following task with the help o jqerry operation 
// 1. prepare and modifty an array with the help of jqerry.map 
// 2. combine two diff array with the help of jqerry.merge
// 3. find dublicates arry entry with the help of jqurerry.unique


$(document).ready(function() {
    // Task 1: Prepare and modify an array with the help of jQuery.map
    var array1 = [1, 2, 3, 4, 5];
    var modifiedArray = $.map(array1, function(value, index) {
        return value * 2; // Example modification: multiply each element by 2
    });
    console.log("Modified Array:", modifiedArray);

    // Task 2: Combine two different arrays with the help of jQuery.merge
    var array2 = [6, 7, 8];
    var combinedArray = $.merge(array1, array2);
    console.log("Combined Array:", combinedArray);

    // Task 3: Find duplicate array entries with the help of jQuery.unique
    var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
    var uniqueArray = $.unique(arrayWithDuplicates);
    console.log("Unique Array:", uniqueArray);
});

