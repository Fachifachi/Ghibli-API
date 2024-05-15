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
      {/* Banner */}
      <div className="bg-gray-800 text-white text-center py-4">
        <p className="text-lg">Welcome to the Ghibli Universe!</p>
        <p className="text-sm">Explore the enchanting world of Studio Ghibli films.</p>
      </div>
   
      <div className="flex flex-wrap justify-center mt-4">
        {movies.map(movie => (
          <Link key={movie.id} href={`/movies/${movie.id}`} className="flex flex-col items-center m-4">
            <img src={movie.image} alt={movie.title} className="w-48 h-auto" />
            <p className="mt-2">{movie.title}</p>
          </Link>
        ))}
      </div>
      {/* Button to go to MoviesAll */}
      <Link href="/movies" className="block text-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See All Movies
        </button>
      </Link>
    </div>
  );
};

export default Home;
