const leapYears = function (inputYear) {

    // div by 4, not by 100, but divisible by 400

    if (inputYear % 4 == 0) {
        if (inputYear % 100 == 0) {
            if (inputYear % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
