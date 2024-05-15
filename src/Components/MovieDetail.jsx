import React from 'react';
import useFetchMovieDetail from '../hooks/useFetchMovieDetail';

const MovieDetail = ({ params }) => {
  const { movie, error, loading } = useFetchMovieDetail(params.id);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-lg text-red-600 mb-4">Error: {error}</p>
        <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400">
          Retry
        </button>
      </div>
    );
  }

  if (!movie) {
    return <div className="text-center">No movie found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">{movie.title}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
        <img src={movie.movie_banner} alt={movie.title} className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0" />
        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-lg mb-2"><strong>Título Original:</strong> {movie.original_title}</p>
          <p className="text-lg mb-2"><strong>Título Original Romanizado:</strong> {movie.original_title_romanised}</p>
          <p className="text-lg mb-2"><strong>Año de Lanzamiento:</strong> {movie.release_date}</p>
          <p className="text-lg mb-2"><strong>Director:</strong> {movie.director}</p>
          <p className="text-lg mb-2"><strong>Productor:</strong> {movie.producer}</p>
          <p className="text-lg mb-2"><strong>Duración:</strong> {movie.running_time} minutos</p>
          <p className="text-lg mb-2"><strong>Puntuación en Rotten Tomatoes:</strong> {movie.rt_score}</p>
        </div>
      </div>
      <p className="text-lg">{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
