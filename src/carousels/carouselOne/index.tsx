import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/apiFunctions';

export function CarouselOne() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then( data => setMovies(data));
  }, [])

  return (  
      <>

      </>
  );
}
