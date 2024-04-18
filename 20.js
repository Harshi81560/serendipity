let i = 1,num=100;
let count = 0;
while (i<=num) {
  if (i%2!==0) {
    console.log(`${i}`)
    count++;
  }
  i++;
}
console.log(`There are ${count} odd number`)