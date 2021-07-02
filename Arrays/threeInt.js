const array = [];
array.push(1);
array.push(2);
array.push(-3);
let sum = 0;
for (let i = 0; i <= array.length - 1; i++) {
  sum = sum + array.indexOf(i);
}
console.log(sum);