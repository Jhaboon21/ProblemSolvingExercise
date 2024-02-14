// add whatever parameters you deem necessary
// function accepts two positive integers and finds if they have the same digit frequency
function sameFrequency(num1, num2) {
    // convert nums into string to gather length
    let str1 = num1.toString();
    let str2 = num2.toString();
    // early fail check if lengths aren't equal
    if (str1.length !== str2.length) return false;

    let count1 = {};
    let count2 = {};
    // frequency counters for the strings
    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = ++count1[str1[i]] || 1;
    }
    for (let j = 0; j < str2.length; j++) {
        count2[str2[j]] = ++count2[str2[j]] || 1;
    }

    // compare frequency between the two counts
    for (let key in count1) {
        if (count1[key] !== count2[key]) return false;
    }
    return true;
}
module.exports = sameFrequency;