function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a/b;
}

function inc(n) {
  return ++n;
}

function dec(n) {
  // var lesser = n - 1;
  //n -= 1;
  return n -= 1 ;
//  return --n;
}

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}
