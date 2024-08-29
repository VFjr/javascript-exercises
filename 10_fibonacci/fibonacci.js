const fibonacci = function (countArg) {
    if (countArg < 0) {
        return "OOPS";
    }
    else if (countArg == 0) {
        return 0;
    }
    else if (countArg <= 2) {
        return 1;
    }

    var a = 1;
    var b = 1;

    for (i = 3; i <= countArg; i++) {
        next_term = a + b;
        a = b;
        b = next_term;
        console.log(`${a}, ${b}`);
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
