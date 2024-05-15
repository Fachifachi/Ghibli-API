import React, { useState, useEffect } from 'react';
import { useHistory } from 'wouter/history'; // Corregimos la importación

const GoBackButton = () => {
  const history = useHistory();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goBack = () => {
    history.goBack();
  };

  if (windowWidth < 440) {
    return (
      <button onClick={goBack} className="absolute top-0 left-0 m-4 p-2 bg-gray-200 rounded-md shadow hover:bg-gray-300">
        Go Back
      </button>
    );
  } else {
    return null;
  }
};

export default GoBackButton;
