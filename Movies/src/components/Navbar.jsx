import React, { useState } from 'react'
import logo from './assets2/movie_6651575.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Navbar({ searchTerm, handleSearch, handleInputChange, setHasSearched, setMovies, setSearchTerm }) {
  const navigate = useNavigate();

  const onLogoClick = () => {
    setHasSearched(false);
    setMovies([]);
    setSearchTerm('');
    navigate('/'); // Va a la home y fuerza a mostrar Hero
  };

  return (
    <div className="container">
      <div className='logo' onClick={onLogoClick} style={{ cursor: 'pointer' }}>
        <h2>Movie Lookup</h2>
        {/* <img src={logo} alt="" className='logoImg' /> */}
      </div>

      <div className="input-container">
        <button type="button" onClick={handleSearch} className="search-button">
          <i className="fa-solid fa-magnifying-glass"><span className='span-icon'>Search</span></i>
        </button>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="input"
          value={searchTerm}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
    </div>
  );
}
