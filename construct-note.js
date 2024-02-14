// add whatever parameters you deem necessary
// function accepts 2 strings 
function constructNote(msg, letters) { 
    const letterFreq = {};
    const msgFreq = {};

    // get a frequency counter for letters
    for (let char of letters) {
        letterFreq[char] = ++letterFreq[char] || 1;
    }

    // get a frequency counter for message
    for (let char of msg) {
        msgFreq[char] = ++msgFreq[char] || 1;
    }

    // compare frequency of message and letters
    // if the message cannot be built with the letters given, return false
    for (let char in msgFreq) {
        if (!letterFreq[char]) return false;
        if (msgFreq[char] > letterFreq[char]) return false;
    }
    return true;
}
module.exports = constructNote;