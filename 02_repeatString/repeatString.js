const repeatString = function (input, count) {

    if (count < 0) {
        return "ERROR";
    }

    output = "";

    for (i = 0; i < count; i++) {
        output += input;
    }
    return output

};

// Do not edit below this line
module.exports = repeatString;
