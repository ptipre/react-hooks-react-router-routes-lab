import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((movie) => {
    return <div key={movie.title}>{movie.title} {movie.time}
      <ul>
        {movie.genres.map(((genre) => {
          return <li key={genre}>{genre}</li>
        }))}
      </ul>
    </div>
  })

  return <div>
    <h1>Movies Page</h1>
    {movieList}
    </div>;
}

export default Movies;
