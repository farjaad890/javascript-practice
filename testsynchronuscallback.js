// function claculator(callback, x, y) {
//   let ans;
//   setTimeout(function () {
//     ans = callback(x, y);
//   }, 2000);
//   console.log(ans);
//   setTimeout(function () {
//     console.log(ans);
//   }, 3000);
// }
// function multiply(x, y) {
//   return x * y;
// }
// claculator(multiply, 5, 2);
function myCalculator(x, y, sign) {
  switch (sign) {
    case "+": {
      console.log(addition(x, y));
      break;
    }
    case "*": {
      console.log(multiply(x, y));
    }
    default:
      break;
  }
}
function addition(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
myCalculator(5, 2, "l");
let myArray = [1, 2, 5, 8, 7, 9, 9, 3, 4, 2, 1, 10, 45, 78, 96];
