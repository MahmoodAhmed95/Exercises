import ActorCard from "./ActorCard";
import "../../../MoviesList.css";

export default function ActorListPage({ movies }) {
  return (
    <>
      <h1>Actors List Page</h1>
      <div className="moviesList">
        {movies.map((movie) => (
          <ActorCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
