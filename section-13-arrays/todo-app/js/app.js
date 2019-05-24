var todos = ["Buy new turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
  var input = prompt("What would you like to do?");

  while(input !== "quit") {
    if(input === "list") {
      console.log(todos);
    }
    else if(input === "new") {
      //ask fo rnew todo
      var newTodo = prompt("Enter new todo.")
      todos.push(newTodo);
    }

    input = prompt("What would you like to do?");
  }
  console.log("Ok. You quit the app.");
}, 500);