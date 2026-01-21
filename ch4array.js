let marks=[85, 90, 78, 92, 88];
console.log("Marks array:", marks);
marks[2]=80;
console.log("Updated Marks array:", marks);

let fruits = ["Apple", "Banana", "Cherry"];
console.log("First fruit:", fruits[0]);

fruits.push("Date");
console.log("Fruits after push:", fruits);

let lastFruit = fruits.pop();
console.log("Popped fruit:", lastFruit);
console.log("Fruits after pop:", fruits);

fruits.unshift("Mango");
console.log("Fruits after unshift:", fruits);

let firstFruit = fruits.shift();
console.log("Shifted fruit:", firstFruit);
console.log("Fruits after shift:", fruits);

let index = fruits.indexOf("Banana");
console.log("Index of Banana:", index);

fruits.splice(1, 1, "Blueberry");
console.log("Fruits after splice:", fruits);

let citrus = fruits.slice(0,2);
console.log("Sliced fruits:", citrus);

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}:`, fruits[i]); }
let res= fruits.concat(marks);
console.log("Concatenated array:", res);

let str = "Hello,World,This,Is,JavaScript";
let strArr = str.split(",");
console.log("String to array:", strArr);

let joinedStr = strArr.join(" ");
console.log("Array to string:", joinedStr);