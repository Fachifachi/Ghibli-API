import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovieDetail = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://ghibliapi.vercel.app/films/${movieId}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Error fetching movie details. Please try again later.');
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return { movie, error, loading };
};

export default useFetchMovieDetail;