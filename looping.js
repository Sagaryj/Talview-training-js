for(let i=0;i<5;i++)
{
    console.log('Iteration number:', i);
}
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
do {
  console.log(i);
  i++;
} while (i < 6);
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

const nums = [10, 20, 30];

for (const num of nums) {
  console.log(num);
}
const user1= { name: "Sagar", age: 25 };

for (const key in user1) {
  console.log(key, user1[key]);
}

