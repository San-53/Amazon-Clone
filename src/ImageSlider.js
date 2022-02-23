import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './Home.css';
{/* <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script> */ }
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import ArrowBackIosNewIcon from '@material-ui/icons/ShoppingCartOutlined';
// import ArrowForwardIosIcon from '@material-ui/icons/ShoppingCartOutlined';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingCartOutlined';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      {/* <i class="fa-regular fa-arrow-right-long" className='left-arrow' onClick={prevSlide} /> */}
      <p className='left-arrow' onClick={prevSlide}>❮</p>
      <p className='right-arrow' onClick={nextSlide}> ❯ </p>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;