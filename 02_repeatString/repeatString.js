const repeatString = function(xs, repeat) {
    if (repeat < 0) {
        return "ERROR";
    }
    let ys = "";
    i = 0;
    while(i < repeat) {
        for(const x of xs) {
            ys += x;
        }
        i ++;
    }
    return ys;
};

// Do not edit below this line
module.exports = repeatString;
