import React from "react";
import "../../../MovieCard.css";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <>
      <Link className="movieItem" to={`/movies/${movie.title}`}>
        <div
          className="movieCard"
          style={{ backgroundImage: `url(${movie.posterPath})` }}
        >
          <div className="movieHeader">
            <h2>{movie.title}</h2>
            <p>{movie.releaseDate}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
