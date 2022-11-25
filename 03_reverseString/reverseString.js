const reverseString = function(xs) {
    let ys = "";
    for(let i= xs.length - 1; i >= 0; i--) {
        ys += xs[i];
    }
    return ys;
};

// Do not edit below this line
module.exports = reverseString;
