const reverseString = function (input) {

    reverse = "";

    for (i = input.length - 1; i >= 0; i--) {
        reverse += input[i]
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
