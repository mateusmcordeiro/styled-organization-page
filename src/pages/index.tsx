import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import { PagesContext, PagesContextProvider } from '../shared/contexts/PagesContext';
import Organization from './organization';
import Search from './search';

function Pages() {
  const pagesContextValues = useContext(PagesContext);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false
  };


  return (
    <PagesContextProvider>
      <PagesContext.Consumer>
        {
          ({setSlickRef}) => {
            return (
              <div className="app">
                <Slider {...settings} ref={slider => {setSlickRef(slider)}}>
                  <div className="carousel__cell">
                    <Search></Search>
                  </div>
                  <div className="carousel__cell">
                    <Organization></Organization>
                  </div>
                </Slider>
              </div>
            )
          }
        }
      </PagesContext.Consumer>
      
    </PagesContextProvider>
  );

}

export default Pages;