import React from "react";
import "../../../MovieCard.css";
import { Link } from "react-router-dom";
const ActorCard = ({ movie }) => {
  return (
    <>
      <Link className="movieItem" to={`/movies/${movie.cast}`}>
        <div
          className="movieCard"
          style={{ backgroundImage: `url(https://picsum.photos/200/300)` }}
        >
          <div className="movieHeader">
            <h2>{movie.cast}</h2>
            {/* <p>{movie.releaseDate}</p> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ActorCard;
