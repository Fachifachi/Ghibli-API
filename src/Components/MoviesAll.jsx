import React from 'react';
import { Link } from 'wouter';
import useFetchMovies from '../hooks/useFetchMovies';

const MoviesAll = () => {
  const { movies, error, loading } = useFetchMovies();

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
