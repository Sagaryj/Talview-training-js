let age = 25;
console.log("age:", age);
var name = "Sagar";
console.log("name:", name);
const isStudent = false;
console.log("isStudent:", isStudent);
console.log("age type:", typeof age);
console.log("name type:", typeof name);
console.log("isStudent type:", typeof isStudent);
let score = 90;
score = 95; // allowed
console.log("Updated score:", score);
const PI = 3.14159;
console.log("PI:", PI);
const user = { name: "Sagar" };
user.name = "YJ"; // allowed
console.log("Updated user name:", user.name);
console.log("user name :", user);
let value = 10;      // number
value = "ten";      // string
console.log("type of value:", typeof value);
/* Primitive Data Types (let , var , const )

Primitive types are:

Immutable

Stored directly in memory

Compared by value*/
/* primitive alli 4 types idhe

1. number

2. string

3. boolean

4. undefined
5 null
6 big int
7 symbol    */  
let string ="Hello, World!";
console.log("string:", string[0]);
let x = 12
console.log(x); // undefined
let z=null;
console.log(z); 
let big = 12345678901234567890n;
console.log("big int:", typeof big);
const id = Symbol("id");
const id2 = Symbol("id");

id === id2; // falses
console.log("symbol:", id === id2);
const person = {
  names: "Sagara YJ",
  age: 30,
  names1: "Sagar",
  age1: 25,
};
console.log("person:", person);

console.log("person age:",person.age);
typeof 10;           // "number"
typeof "hello";      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" 
typeof {};           // "object"
typeof function(){}; // "function"
// Funtionsssssssss

function greet(name) {
  return "Hello " + name + "! How are you?";
}
console.log(greet("Sagar"));
function add(a, b) {
  return a + b;
}
console.log("Addition:", add(5, 10));
function isEven(num) {
  return num % 2 === 0;
}
console.log("Is 4 even?", isEven(4));
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log("Factorial of 5:", factorial(5));

// Arrayssssssssssssss
const arr = [10, 20, 30, 40];
console.log("numbers:", arr);
console.log("First number:", arr[0]);
arr.push(50);
console.log("After push:", arr);
const mixed = [
  1,
  "text",
  true,
  null,
  { name: "Sagar" },
  function () { return "Hi"; }
];
console.log("mixed array:", mixed);
console.log("Function in mixed array:", mixed[5]());
const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a); // [1, 2, 3, 4]
arr.pop();
console.log("After pop:", arr);
arr.push(5);
console.log("After pop and push:", arr);
arr.shift();
console.log("After shift:", arr);
arr.unshift(0o23); // octal coz starting with 0 n is calculated has 2*8 + 3 = 19 if it has 23 then 23 directly gets added to the array
console.log("After unshift:", arr);
arr.unshift(15); // in this case array gets 15 at the starting 
console.log("After unshift 15:", arr);
