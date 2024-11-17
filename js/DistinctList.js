/*
Using the JavaScript language, have the function DistinctList(arr)
take the array of numbers stored in arr and determine the total number
of duplicate entries. For example if the input is [1, 2, 2, 2, 3]
then your program should output 2 because there are two duplicates of one of the elements.
 */

function DistinctList(arr) {
    const noEquals = [...new Set(arr)];
    return (arr.length - noEquals.length)
}

console.log(DistinctList([1, 2, 2, 3, 2, 1, 3, 3, 3]));
console.log(DistinctList([1, 1, 2, 2, 3]));
console.log(DistinctList([0, -2, -2, 5, 5, 5]));
console.log(DistinctList([1, 2, 2, 2, 3]));