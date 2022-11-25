const removeFromArray = function() {
    let inputArr = arguments[0];
    let toRemove = [];
    for (let i = 1; i < arguments.length; i++) {
        toRemove.push(arguments[i]);
    }
    
    let newArr = [];
    for (const e of inputArr) {
        if (toRemove.includes(e)) {
            continue;
        }
        newArr.push(e);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
