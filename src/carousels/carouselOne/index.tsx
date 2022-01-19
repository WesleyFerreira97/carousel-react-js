import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/apiFunctions';
import { CarouselWrap, Item } from './style';

type PropsItem = {
   children?: string;
   width?: string;
}

type PropsCarousel = {
   children: React.ReactNode;
}

export const CarouselItem = ({children, width} : PropsItem) => {
   return (
      <Item width={width}>
         {children}
      </Item>
   );
}


export const Carousel = ({children}: PropsCarousel) => {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getPopularMovies().then( data => setMovies(data));
  }, [])

  const updateIndex = (newIndex: number) => {
      if(newIndex < 0){
        newIndex = React.Children.count(children) - 1;
      } else if (newIndex >= React.Children.count(children)){
         newIndex = 0;
      }

      setActiveIndex(newIndex);
  }

  return (  
     <>
      <CarouselWrap>
         <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)` }}>
            {React.Children.map(children, (child : any, index) => {
               return React.cloneElement(child, {width: "100%"})
            })}
         </div>
      </CarouselWrap>

      <div className="indicators">
         <button onClick={() => updateIndex(activeIndex - 1)}>{'> Prev'}</button>
         <button onClick={() => updateIndex(activeIndex + 1)}>{'< Next'}</button>
      </div>

   </>
  );
}
