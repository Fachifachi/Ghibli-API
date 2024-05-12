// Banner.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const getRandomMovies = () => {
    const randomMovies = [];
    const moviesCopy = [...movies];

    while (randomMovies.length < 5 && moviesCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * moviesCopy.length);
      randomMovies.push(moviesCopy.splice(randomIndex, 1)[0]);
    }

    return randomMovies;
  };

  const randomMovies = getRandomMovies();

  return (
    <div>
      <h1>Banner</h1>
      <div>
        {randomMovies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={getMovieImage(movie.id)} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

const getMovieImage = (movieId) => {
  switch (movieId) {
    case "58611129-2dbc-4a81-a72f-77ddfc1b1b49":
      return "url_de_la_imagen_1";
    case "2baf70d1-42bb-4437-b551-e5fed5a87abe":
      return "url_de_la_imagen_2";
    case "ba924631-068e-4436-b6de-f3283fa848f0":
      return "url_de_la_imagen_3";
    case "b5a92d0e-5fb4-43d4-ba60-c012135958e4":
      return "url_de_la_imagen_4";
    default:
      return "url_por_defecto";
  }
};

export default Banner;
