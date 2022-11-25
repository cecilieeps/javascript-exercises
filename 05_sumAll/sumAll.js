const sumAll = function(x, y) {
    for (const e of arguments) {
        if (typeof e != "number" || e.length > 1 || e < 0) {
            return "ERROR";
        }
    }
    let lowerBound;
    let upperBound;
    if (x > y) {
        upperBound = x;
        lowerBound = y;
    }
    else {
        upperBound = y;
        lowerBound = x;
    }
    let sum = 0;
    for (let n = lowerBound; n <= upperBound; n++){
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
