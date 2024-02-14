// add whatever parameters you deem necessary
// funciton is given a sorted array and a target average
function averagePair(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;

        if (avg === num) {
            return true;
        } else if (avg < num) { // if average is less than the target, move the left pointer up
            start++;
        } else { // if average is greater than target, move right pointer down
            end--;
        }
    }
    return false;
}
module.exports = averagePair;