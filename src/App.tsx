import React from 'react';
import { Carousel, CarouselItem } from './carousels/carouselOne/index';

function App() {
  return (
    <div className="App">
        <Carousel>
           <CarouselItem>Item 1</CarouselItem>
           <CarouselItem>Item 2</CarouselItem>
           <CarouselItem>Item 3</CarouselItem>
        </Carousel>
    </div>
  );
}

export default App;
