// add whatever parameters you deem necessary
// function accepts two arrays and returns an object created from the keys and values
function twoArrayObject(keys, values) { 
    return keys.reduce((obj, cur, idx) => {
        obj[cur] = idx < values.length ? values[idx] : null;
        return obj;
    }, {});
}
module.exports = twoArrayObject;