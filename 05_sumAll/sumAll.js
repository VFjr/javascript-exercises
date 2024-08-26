const sumAll = function (number1, number2) {

    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    }
    else if (number1 < 0 || number2 < 0) {
        return "ERROR";
    }

    sum = 0
    for (i = Math.min(number1, number2); i <= Math.max(number1, number2); i++) {
        sum += i;

    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
