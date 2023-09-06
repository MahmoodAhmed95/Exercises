import MovieCard from "./MovieCard";
import "../../../MoviesList.css";

export default function MoviesListPage({ movies }) {
  return (
    <>
      <h1>Movies List Page</h1>
      <div className="moviesList">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
