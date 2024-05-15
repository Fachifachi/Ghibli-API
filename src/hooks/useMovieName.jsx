// useMovieName.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieName = (useLocation) => {
  const [location] = useLocation();
  const [movieName, setMovieName] = useState(null);

  useEffect(() => {
    const fetchMovieName = async () => {
      const segments = location.split('/');
      if (segments.length >= 3 && segments[1].toLowerCase() === 'movies') {
        const movieId = segments[2];
        try {
          const response = await axios.get(`https://ghibliapi.vercel.app/films/${movieId}`);
          setMovieName(response.data.title);
        } catch (error) {
          console.error('Error fetching movie details:', error);
          setMovieName(null);
        }
      } else {
        setMovieName(null);
      }
    };

    fetchMovieName();
  }, [location]);

  return movieName;
};

export default useMovieName;
