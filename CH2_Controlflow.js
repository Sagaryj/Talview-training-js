
const xe = 10;
const ye = 30;
if (xe===ye) 
{
    console.log("x is equal to y");
} 
else 
{
    console.log("x is not equal to y");
}
let score1 = 85;

if (score1 >= 90) {
  grade = "A";
} else if (score1 >= 75) {
  grade = "B";
} else {
  grade = "C";
}
console.log("Grade:", grade);
//switch case
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// operators
let a2 = 10;
let b2 = 5;
/* 1. Arithmetic Operators */
console.log(a2 + b2);   
console.log(a2 - b2);   
console.log(a2 * b2);   
console.log(a2 / b2);   
console.log(a2 % b2);   
console.log(a2 ** b2); 
/* 2. Assignment Operators */
let xg = 10;
xg += b2;   // x = x + b2 → 15
console.log(xg);
xg -= b2;   
console.log(xg);
xg *= b2;   
console.log(xg);
xg /= b2;   
console.log(xg);
xg %= b2; 
console.log(xg);



console.log(a2 > 5 && b2 > 3);
console.log(a2 > 5 || b2 > 10);
console.log(!(a2 > b2));

console.log(a2 == b2);
console.log(a2 === b2);
console.log(a2 != b2);
console.log(a2 !== b2);
console.log(a2 > b2);
console.log(a2 < b2);
console.log(a2 >= 10);
console.log(b2 <= 5);

let xy = 5;

console.log(++xy);
console.log(xy++);
console.log(--xy);
console.log(xy--);

console.log(typeof xy);

let result = xy>5 ? "X is greater than 5" : "X is not greater than 5";
console.log(result);
xy>10 ? console.log("X is greater than 10") : console.log("X is 10 or less");

