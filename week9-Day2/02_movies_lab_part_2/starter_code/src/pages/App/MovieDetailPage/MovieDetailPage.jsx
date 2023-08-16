// export default function MovieDetailPage(props) {
//   return (
//   <h1>Movie Detail Page</h1>
//   );
// }
import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = ({ movies }) => {
  const { movieName } = useParams();

  // Find the movie object that matches the movieName parameter
  const movie = movies.find((movie) => movie.title === movieName);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, releaseDate, posterPath, cast } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
      <img src={posterPath} alt={title} />
      <p>Cast: {cast.join(", ")}</p>
    </div>
  );
};

export default MovieDetailPage;
