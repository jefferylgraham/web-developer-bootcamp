var age = Number(prompt("How old are you?"));

if(age < 0) {
  console.log("Error!!");
}
else if(age === 21) {
  console.log("Happy 21st Birthday!");
}
else if(age % 2 !== 0){
  console.log("Your age is odd!")
}
else if(Math.sqrt(age) % 1 === 0) {
  console.log("Perfect square");
}