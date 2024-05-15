import { useState, useEffect } from 'react';
import axios from 'axios';

const useMoviesData = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        // Tomamos solo las primeras 4 películas
        setMovies(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return movies;
};

export default useMoviesData;
