import React from 'react'
import logo from './assets2/movie_6651575.png'

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="title-container">
          <h3 className="title">
            MOVIE <img src={logo} alt="logo" className="logoImg" /> LOOKUP
          </h3>
          <h4 className='sub-title'>
            Movie Insight Delight
          </h4>
          <h5 className='sub3-title'>"Explore millions of movies, get detailed information, and discover what to watch tonight."</h5>
        </div>
      </div>

    </>
  )
}

export default Hero
