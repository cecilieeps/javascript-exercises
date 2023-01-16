const palindromes = function(xs) {
    // First strip punctuation and space from xs
    let reverse = [];
    const charArray = xs.split("").filter(x => x.toLowerCase() !== x.toUpperCase())
    for (let i = charArray.length - 1; i >= 0; i--) {
        reverse.push(charArray[i]);
    }
    let i = charArray.length-1;
    while (i--) {
        if (charArray[i].toLowerCase() !== reverse[i].toLowerCase()) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
