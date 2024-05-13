import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'wouter';

const MoviesAll = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Error fetching movies. Please try again later.');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-5 gap-4">
        {movies.map(movie => (
          <Link key={movie.id} href={`/movies/${movie.id}`} className="flex flex-col items-center">
            <img src={movie.image} alt={movie.title} className="w-full h-auto rounded-lg shadow-md mb-2 object-cover" />
            <span className="text-center">{movie.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesAll;
