// add whatever parameters you deem necessary
// function takes an array and a number which represents the sum of a pair of integers in the array
// return  the number of pairs that equal the sum
function countPairs(arr, num) {
    let set = new Set(arr);
    let count = 0;
    for (let val of arr) {
        set.delete(val);
        if (set.has(num - val)) {
            count++;
        }
    }
    return count;
}
module.exports = countPairs;