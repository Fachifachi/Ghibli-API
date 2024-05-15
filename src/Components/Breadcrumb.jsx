import React from 'react';
import { Link, useLocation } from 'wouter';
import usePathSegments from '../hooks/usePathSegments';
import useMovieName from '../hooks/useMovieName';

const Breadcrumb = () => {
  const pathSegments = usePathSegments();
  const movieName = useMovieName(useLocation);

  return (
    <div className="flex justify-center items-center text-gray-900 text-xl font-bold bg-sky-blue flex-wrap">
      <Link href="/" className="hover:text-gray-800">
        Home
      </Link>
      {/* Flecha agregada entre Home y Movies */}
      <svg
        className="w-4 h-4 fill-current text-gray-700 mx-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M8 0l-8 8 8 8 1.41-1.41-6.59-6.59h17.17v-2h-17.17l6.59-6.59z"/>
      </svg>
      {/* Fin de la flecha */}
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
