// add whatever parameters you deem necessary
// function accepts an array of integers and returns the length of longest consecutive decrease of integers
function longestFall(arr) { 
    let counter = 1;
    let fallCounter = 1; // return value is default to 1 
    if (arr.length === 0) return 0; // if array is empty, return 0 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            counter++;
            fallCounter = Math.max(counter, fallCounter);
        } else {
        counter = 1;
        }
    } 
    return fallCounter;
}
module.exports = longestFall;