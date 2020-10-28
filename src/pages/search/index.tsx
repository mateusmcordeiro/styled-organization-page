import React, { useRef, useState } from 'react';
import Input from '../../shared/components/input';
import './App.scss';
import Slider from 'react-slick';



function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [organizationName, setOrganizationName] = useState<string>('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false
  };
  const [sliderRef, setSliderRef] = useState<any>();

  return (
    <div className="app">
      <Slider {...settings} ref={slider => (setSliderRef(slider))}>
        <div className="carousel__cell">
          <div className="app__page">
            <Input
              onChangeInput={
                (e) => {
                  setOrganizationName(e.target.value)
                }
              }
              onClickButton={
                (e) => {
                  setLoading(true);
                  setTimeout(() => {
                    sliderRef.slickGoTo(1);
                  },3000)
                }
              }
              
              loading={loading}
              selfValue={organizationName}
            ></Input>
          </div>
          
        </div>
        <div className="carousel__cell">
          <div className="app__page">
            teste
          </div>
        </div>
      </Slider>
      
    </div>
  );
}

export default App;
