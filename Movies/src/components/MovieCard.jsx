import { Link } from "react-router-dom";

export default function MovieCard({ movie, setHasSearched }) {
  const handleClick = () => {
    setHasSearched(true);
  };

  return (
    <Link to={`/movie/${movie.id}`} onClick={handleClick} className='movie_card_container'>
      <img className='img-card' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='poster img' />
      <div className="container-title-card">
        <h2 className='title-card'>{movie.title}</h2>
      </div>
    </Link>
  );
}
