console.log("Print all numbers between -10 & 19");
for (var i = -10; i <= 19; i++) {
  console.log(i);
}

console.log("Print all even numbers bewteen 10 & 40");
for (i = 10; i <= 40; i++) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

console.log("Print all odd numbers between 300 & 333");
for (var i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("Print all numbers divisible by  5 & 3 between 5 and 50");
for (var i = 5; i <= 50; i++) {
  if (i % 15 === 0) {
    console.log(i);
  }
}