const convertToCelsius = function (temperatureFahrenheit) {

  return parseFloat(((temperatureFahrenheit - 32) * 5 / 9).toFixed(1))
};

const convertToFahrenheit = function (temperatureCelsius) {

  return parseFloat(((temperatureCelsius * 9 / 5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
