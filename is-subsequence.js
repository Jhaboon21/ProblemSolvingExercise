// add whatever parameters you deem necessary
// function takes two strings and checks if characters in first string form a
// subsequence of charcters in the second string
function isSubsequence(str1, str2) {
    let str1Index = 0;
    let str2Index = 0;
    while (str2Index < str2.length) {
        if (str2[str2Index] === str1[str1Index]) {
            str1Index += 1;
        }
        if (str1Index === str1.length) return true;
        
        str2Index += 1;
    }
    return false;
}
module.exports = isSubsequence;