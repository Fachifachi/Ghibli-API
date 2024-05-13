import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetail = ({ params }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://ghibliapi.vercel.app/films/${params.id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Error fetching movie details. Please try again later.');
        setLoading(false);
      }
    };

    fetchMovie();
  }, [params.id]);

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

  if (!movie) {
    return <div>No movie found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <div className="flex justify-between items-center mb-4">
        <p><strong>Título Original:</strong> {movie.original_title}</p>
        <p><strong>Título Original Romanizado:</strong> {movie.original_title_romanised}</p>
        <p><strong>Año de lanzamiento:</strong> {movie.release_date}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Productor:</strong> {movie.producer}</p>
        <p><strong>Duración:</strong> {movie.running_time} minutos</p>
        <p><strong>Puntuación en Rotten Tomatoes:</strong> {movie.rt_score}</p>
      </div>
      <img src={movie.movie_banner} alt={movie.title} className="w-full rounded-lg shadow-md mb-4" />
      <p className="text-lg">{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
