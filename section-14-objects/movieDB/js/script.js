var movies = [
  {
    title: "Avengers: Endgame",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Us",
    rating: 1,
    hasWatched: true
  },
  {
    title: "John Wick 3",
    rating: 5,
    hasWatched: false
  }
];

movies.forEach(function(movie) {
  console.log(buildMovieString(movie));
})

function buildMovieString(movieObj) {
  var result = "You have ";
  if(movieObj.hasWatched) {
    result += "watched ";
  }
  else {
    result += "not seen ";
  }
  result += "\"" + movieObj.title + "\" - ";
  result += movieObj.rating + " stars."
  return result;
}