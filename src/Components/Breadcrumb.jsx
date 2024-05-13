import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import axios from 'axios';

const Breadcrumb = () => {
  const [location] = useLocation();
  const [movieName, setMovieName] = useState(null);

  useEffect(() => {
    const fetchMovieName = async () => {
      const segments = location.split('/');
      if (segments.length >= 3 && segments[1] === 'movies') {
        const movieId = segments[2];
        try {
          const response = await axios.get(`https://ghibliapi.vercel.app/films/${movieId}`);
          setMovieName(response.data.title);
        } catch (error) {
          console.error('Error fetching movie details:', error);
          setMovieName(null); // Si hay un error, establece el nombre de la película como nulo
        }
      } else {
        setMovieName(null); // Si la URL no corresponde a una película, establece el nombre de la película como nulo
      }
    };

    fetchMovieName();
  }, [location]);

  const getPathSegments = () => {
    return location.split('/').filter(segment => segment !== '');
  };

  const pathSegments = getPathSegments();

  return (
    <div>
      <Link href="/">Home</Link>
      {pathSegments.map((segment, index) => (
        <span key={index}>
          {' > '}
          {index === pathSegments.length - 1 ? (
            <span>{movieName || segment}</span>
          ) : (
            <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
