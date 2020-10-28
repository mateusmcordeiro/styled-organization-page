import React, { useState } from 'react';
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
    slidesToScroll: 1
    };

  return (
    <div className="app">
      <Slider {...settings}>
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
                }
              }
              
              loading={loading}
              selfValue={organizationName}
            ></Input>
          </div>
          
        </div>
        <div className="carousel__cell">
          teste
        </div>
      </Slider>
      
    </div>
  );
}

export default App;
