import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import axios from 'axios';

const Breadcrumb = () => {
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

  const getPathSegments = () => {
    return location.split('/').filter(segment => segment !== '');
  };

  const pathSegments = getPathSegments();

  return (
    <div className="flex justify-center items-center text-gray-900 text-xl font-bold py-4 bg-gray-300 flex-wrap">
      <Link href="/" className="hover:text-gray-800">
        Home
      </Link>
      <svg
        className="w-4 h-4 fill-current text-gray-700 transform rotate-180 mx-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M8 0l-8 8 8 8 1.41-1.41-6.59-6.59h17.17v-2h-17.17l6.59-6.59z"/>
      </svg>
      {pathSegments.map((segment, index) => (
        <span key={index} className="flex items-center mx-2">
          {index !== 0 && (
            <svg
              className="w-4 h-4 fill-current text-gray-700 transform rotate-180 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M8 0l-8 8 8 8 1.41-1.41-6.59-6.59h17.17v-2h-17.17l6.59-6.59z"/>
            </svg>
          )}
          {index === pathSegments.length - 1 ? (
            <span className="ml-1" style={{ backgroundColor: location === '/' ? 'yellow' : '#3182ce' }}>
              {movieName || segment.charAt(0).toUpperCase() + segment.slice(1)}
            </span>
          ) : (
            <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`} className="hover:text-gray-800">
              {segment === 'movies' ? 'Movies' : segment}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
