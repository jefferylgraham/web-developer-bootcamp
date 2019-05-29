// var h1 = document.querySelector("h1");

// h1.style.color = "yellow";
// h1.style.border = "5px solid pink";

// var p = document.querySelector("p");

// p.classList.add("big");

var p = document.getElementsByTagName("p")[0];


var ul = document.querySelector("ul");

var img1 = document.getElementsByTagName("img")[0];

var a = document.querySelector("a");

var h1 = document.querySelector("h1");

// h1.addEventListener("click", function() {
//   h1.style.background = "orange";
// })

var ul = document.querySelector("ul");

// ul.addEventListener("click", function() {
//   console.log("You clicked the ul");
// })

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    this.style.color = "pink";
  })
}