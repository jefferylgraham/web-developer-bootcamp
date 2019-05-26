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
  if(movie.hasWatched === true) {
    console.log("You have seen \"" + movie.title + "\" - " + movie.rating + " stars.")
  }
  else {
    console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars.")
  }
})