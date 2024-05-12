import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'wouter';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        // Tomamos solo las primeras 5 películas
        setMovies(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Inicio</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Botón para ir a MoviesAll */}
      <Link href="/movies">
        <button>Ver Todas las Películas</button>
      </Link>
    </div>
  );
};

export default Home;
