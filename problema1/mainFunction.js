// problema1/mainFunction.js

function mainFunction(inputString) {
    function auxiliaryFunction(str) {
      return str.split('').reverse().join('');
    }
  
    return auxiliaryFunction(inputString);
  }
  
  module.exports = { mainFunction };
  