var todos = ["Buy new turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
  var input = prompt("What would you like to do?");

  while(input !== "quit") {
    if(input === "list") {
      listTodos();
    }
    else if(input === "new") {
      addTodo();
    }
    else if(input === "delete") {
      deleteTodo();
    }
    input = prompt("What would you like to do?");
  }
  console.log("Ok. You quit the app.");
}, 500);

function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, index) {
    console.log(index + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  //ask for new todo
  var newTodo = prompt("Enter new todo.");
  todos.push(newTodo);
  console.log("Added todo");
}

function deleteTodo() {
  var idx = prompt("Enter index of todo to delete");
  todos.splice(idx, 1);
  console.log("Todo Deleted!");
}