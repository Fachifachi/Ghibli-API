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
      <div className="flex flex-wrap justify-center">
        {movies.map(movie => (
          <Link key={movie.id} href={`/movies/${movie.id}`} className="flex flex-col items-center m-4">
            <img src={movie.image} alt={movie.title} className="w-48 h-auto" />
            <p className="mt-2">{movie.title}</p>
          </Link>
        ))}
      </div>
      {/* Botón para ir a MoviesAll */}
      <Link href="/movies" className="block text-center mt-4">
        <button>Ver Todas las Películas</button>
      </Link>
    </div>
  );
};

export default Home;
