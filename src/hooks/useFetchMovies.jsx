import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovies = () => {
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

  return { movies, error, loading };
};

export default useFetchMovies;
