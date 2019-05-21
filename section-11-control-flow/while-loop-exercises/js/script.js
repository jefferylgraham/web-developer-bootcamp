console.log("Print all numbers between -10 & 19");
var num = -10;
while(num <= 19) {
  console.log(num);
  num++;
}

console.log("Print all even numbers bewteen 10 & 40");
num = 10;
while(num <= 40) {
  if(num % 2 === 0) {
    console.log(num);
  }
  num++;
}

console.log("Print all odd numbers between 300 & 333");
num = 300;
while(num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

console.log("Print all numbers divisible by  5 & 30 between 5 and 50");
num = 5;
while(num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}