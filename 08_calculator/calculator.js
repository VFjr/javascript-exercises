const add = function (arg1, arg2) {
  return arg1 + arg2;
};

const subtract = function (arg1, arg2) {
  return arg1 - arg2;
};

const sum = function (argArray) {
  return argArray.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function (argArray) {
  return argArray.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function (arg1, arg2) {
  return arg1 ** arg2;
};

const factorial = function (arg1) {
  var sum = 1;

  for (i = 1; i <= arg1; i++) {
    sum *= i;
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
