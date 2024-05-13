// MovieDetail.jsx

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
    <div>
      <h1>{movie.title}</h1>
      <p>Año de lanzamiento: {movie.release_date}</p>
      <p>Director: {movie.director}</p>
      <p>Descripción: {movie.description}</p>
    </div>
  );
};

export default MovieDetail;
