import MovieCard from "./MovieCard";

export default function Home({ movies, setHasSearched }) {
  return (
    <div className="home-container">
      <div className="movie-grid">
        {movies
          .filter(movie => movie.poster_path && movie.adult === false)
          .map(movie => (
            <MovieCard key={movie.id} movie={movie} setHasSearched={setHasSearched} />
          ))}
      </div>
    </div>
  );
}

