const removeFromArray = function () {

    var outputArray = [];

    for (i = 0; i < arguments[0].length; i++) {

        var good = true;
        console.log(`test i ${i} value ${arguments[0][i]}`)

        for (j = 1; j < arguments.length; j++) {
            console.log(`test j ${i} value ${arguments[j]}`)

            if (arguments[0][i] === arguments[j]) {
                console.log(`match`)
                good = false;
                break;
            }
        }

        if (good) {
            outputArray.push(arguments[0][i]);

        }
    }

    return outputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
