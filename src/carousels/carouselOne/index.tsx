import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/apiFunctions';
import { CarouselWrap, Item } from './style';

type PropsItem = {
   children: string;
   width: number;
}

type PropsCarousel = {
   children: React.ReactNode;
}

export const CarouselItem = ({children, width} : PropsItem) => {
   return (
      <Item width={"100px"}>

      </Item>
   );
}

export const Carousel = ({children}: PropsCarousel) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then( data => setMovies(data));
  }, [])

  return (  
      <CarouselWrap>
         <div className="inner" style={{transform: "translateX(0%)" }}>
            {React.Children.map(children, (child, index) => {
               return React.cloneElement(child, {width: "100%"})
            })}
         </div>
      </CarouselWrap>
  );
}
