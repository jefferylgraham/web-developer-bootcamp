//check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on X to delete to-do
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
  if(event.which === 13) {
    var todoText = $(this).val();
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
    $(this).val("");
  }
});