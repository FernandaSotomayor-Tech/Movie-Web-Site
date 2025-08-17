import { useState } from 'react';
import './App.css';
import './css/Navbar.css';
import './css/MovieCard.css';
import './css/Movie.css';
import './css/MovieDetail.css';
import './css/Hero.css';
import './css/Footer.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { searchMovies } from './api/api';
import { BrowserRouter, Routes, Route,useNavigate,useLocation } from 'react-router-dom'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();   


async function handleSearch(e) {
  e.preventDefault();
  const results = await searchMovies(searchTerm);
  setMovies(results);
  setHasSearched(true);
  navigate('/');  // <-- agregar esta línea para redirigir a la home con resultados
}


  function handleInputChange(value) {
    setSearchTerm(value);

    if (value.trim() === '') {
      setMovies([]);
      setHasSearched(false);
    }
  }



  return (
    <>
    <Navbar
    searchTerm={searchTerm}
    handleSearch={handleSearch}
    handleInputChange={handleInputChange}
    setHasSearched={setHasSearched}
    setMovies={setMovies}
    setSearchTerm={setSearchTerm}
  />

  {location.pathname === '/' && !hasSearched && <Hero />}

  <Routes>
  <Route path='/' element={<Home movies={movies} setHasSearched={setHasSearched} />} />
    <Route
      path='/movie/:id'
      element={
        <MovieDetail
          setHasSearched={setHasSearched}
          setMovies={setMovies}
          setSearchTerm={setSearchTerm}
        />
      }
    />
  </Routes>
   <Footer />
    </>
  );
}

export default App;

