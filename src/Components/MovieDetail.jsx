import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetail = ({ params }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://ghibliapi.vercel.app/films/${params.id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [params.id]);

  if (!movie) {
    return <div>Cargando...</div>;
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