import React from 'react';
import { Carousel, CarouselItem } from './carousels/carouselOne/index';

function App() {
  return (
    <div className="App">
        <Carousel>
           <CarouselItem width="500px">Item 10</CarouselItem>
           <CarouselItem>Item 2</CarouselItem>
           <CarouselItem>Item 3</CarouselItem>
           <CarouselItem>Item 4</CarouselItem>
           <CarouselItem>Item 5</CarouselItem>
        </Carousel>
    </div>
  );
}

export default App;
