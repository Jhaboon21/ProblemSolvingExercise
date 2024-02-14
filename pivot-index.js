// add whatever parameters you deem necessary
// function accepts array and returns pivot index where sum of integers of the left equal to the sum on the right
function pivotIndex(arr) {
    let rightSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    let pIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        if (leftSum === rightSum) {
            pIndex = i;
            break;
        }
        rightSum -= arr[i];
    }
    return pIndex;
}
module.exports = pivotIndex;