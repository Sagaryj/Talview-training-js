function multiply(a, b) {
  return a * b;
}
console.log("Multiplication:");
resmul=multiply(23,39);
console.log(resmul);

function power(base, exponent) {
  return Math.pow(base, exponent);
}
console.log("Power:");
respow=power(2, 5);
console.log(respow);

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Is 7 prime?");
resprime=isPrime(7);
console.log(resprime);
const square = function (number) {
  return number * number;
};

console.log(square(4));

console.log(squar(5));

function squar(n) {
  return n * n;
}
function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (const child of node.childNodes) {
    walkTree(child);
  }
}
console.log("walkTree function defined.", walkTree(null));