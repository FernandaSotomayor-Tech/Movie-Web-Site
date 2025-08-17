import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function MovieDetail({ setHasSearched, setMovies, setSearchTerm }) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ef8491ae3d502312194ce61f3c1ee1c9`);
                const data = await res.json();
                setMovie(data);
            } catch (error) {
                console.error("Error fething this api"), error;
            }

        }
        fetchMovie();
    }, [id]);

    if (!movie) return <p>Loading...</p>;
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';
    return (
        <>
            <div className="container-movieDetail">
                <div className="container2-movieDetail">
                    <div className='movie-detail'>
                        <img
                            src={posterUrl}
                            alt={movie.title}
                            className='img-detail'
                        />
                        <div className="container-details">
                            <h2 className='h2-detail'>{movie.title}</h2>
                            <h3> <span className='span-h3'>Lenguage : </span>{movie.original_language}</h3>
                            <div className="container-releaseDate">
                                <p className='release-date'>
                                    <strong className='strong-date'>Fecha de lanzamiento:</strong> <br /> {movie.release_date}
                                </p>
                            </div>
                            <div className="container-sipnosis">
                                <p className='sipnosis'>
                                    <strong className='strong-sipnosis'>Sinopsis:</strong> <br /> {movie.overview}
                                </p>
                            </div>
                            <button className='back-button'
                                onClick={() => {
                                    navigate('/');
                                }}
                            >
                                ← Volver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
