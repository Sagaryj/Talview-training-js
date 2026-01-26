console.log("Asynchronous script started.");

setTimeout(() => {
  console.log("This message is shown after 9 seconds.");
}, 9000);

console.log("Asynchronous script ended.");
console.log("1");
console.log("2");

console.log("3");
setTimeout(() => { 
    console.log("This is from setTimeout with 3 delay.");
}, 3000);
function getdata(dataid) {
    setTimeout(() => {
        console.log("data is ", dataid); }
        ,2000); }
let varss= getdata(5);
console.log(varss);
