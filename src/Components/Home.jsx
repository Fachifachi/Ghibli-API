import React from 'react';
import { Link } from 'wouter';
import useMoviesData from '../hooks/useMoviesData';

const Home = () => {
  const movies = useMoviesData();

  return (
    <div>
      {/* Banner */}
      <div className="bg-gray-800 text-white text-center py-4">
        <p className="text-lg">Welcome to the Ghibli Universe!</p>
        <p className="text-sm">Explore the enchanting world of Studio Ghibli films.</p>
      </div>
      
      <div className="w-full px-0 overflow-hidden" style={{ maxHeight: '350px' }}>
        <img src="./3.jpg" alt="Banner" className="w-full h-auto max-h-full mx-auto" />
      </div>
   
      {/* Sección de películas */}
      <div className="container mx-auto mt-8 flex justify-center flex-wrap">
        {movies.map(movie => (
          <Link key={movie.id} href={`/movies/${movie.id}`} className="flex flex-col items-center m-4">
            <img src={movie.image} alt={movie.title} className="w-full h-auto" style={{ maxWidth: '200px' }} />
            <div className="p-4">
              <p className="text-lg font-semibold">{movie.title}</p>
            </div>
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
