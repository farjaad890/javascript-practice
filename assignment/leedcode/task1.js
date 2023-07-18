function Divisionfunction(dividend, divisor) {
  let check = 0;
  let signedDividend = 0;
  let signedDivisor = 0;
  if (divisor < 0) {
    divisor = divisor * -1;
    signedDivisor = 1;
  }
  if (dividend < 0) {
    dividend = dividend * -1;
    signedDividend = 1;
  }
  if (dividend == divisor) {
    if (signedDividend && signedDivisor) {
      return 1;
    } else if (signedDividend || signedDivisor) {
      return -1;
    }
    return 1;
  }
  if (divisor > dividend) {
    return 0;
  }
  while (true) {
    if (dividend - divisor > 0) {
      check++;
      dividend = dividend - divisor;
    } else {
      if (signedDividend || signedDivisor) {
        return check * -1;
      }
      return check;
    }
  }
}
console.log(Divisionfunction(-2147483648, -1));
