import React from 'react';
import { Link, useLocation } from 'wouter';
import usePathSegments from '../hooks/usePathSegments';
import useMovieName from '../hooks/useMovieName';

const Breadcrumb = () => {
  const pathSegments = usePathSegments();
  const movieName = useMovieName(useLocation);
  const location = useLocation()[0];

  return (
    <div className="flex justify-center items-center text-gray-900 text-xl font-bold bg-sky-blue flex-wrap py-2">
      <Link href="/" className="hover:text-gray-800 mr-2">
        Home
      </Link>
      {(location === '/' || pathSegments.includes('movies') || movieName) && (
        <span className="mx-2">/</span>
      )}
      {pathSegments.map((segment, index) => (
        <span key={index} className="flex items-center">
          {index !== 0 && (
            <span className="mx-2">/</span>
          )}
          {index === pathSegments.length - 1 ? (
            <span className="ml-1" style={{ backgroundColor: location === '/' ? 'yellow' : '#3182ce' }}>
              {movieName || segment.charAt(0).toUpperCase() + segment.slice(1)}
            </span>
          ) : (
            <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`} className="hover:text-gray-800 mx-2">
              {segment === 'movies' ? 'Movies' : segment}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
