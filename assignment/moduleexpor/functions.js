// function addition(a, b) {
//   return a + b;
// }
// function subtraction(a, b) {
//   return a - b;
// }
function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const calculator = {
  division: div,
  multiply: multiply,
  message: "Hello from object",
};
module.exports.myClaculator = calculator;
// module.exports.exportMultiply = multiply;
// module.exports.exportAdd = addition;
