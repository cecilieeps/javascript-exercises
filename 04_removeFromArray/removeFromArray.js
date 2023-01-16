const removeFromArray = function() {
    let inputArr = arguments[0];
    let newArr = [];
    for (const e of inputArr) {
        if (!arguments.includes(e)) {
            newArr.push(e)
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
