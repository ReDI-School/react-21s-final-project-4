import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Carousel = ({ images }) => {
  const [imageCount, setImageCount] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setImageCount(imageCount === images.length - 1 ? 0 : imageCount + 1);
    }, 1500);
    return () => {
      clearTimeout(timer.current);
    };
  });
  const handleNext = () => {
    setImageCount(imageCount === images.length - 1 ? 0 : imageCount + 1);
  };
  const handlePrevious = () => {
    setImageCount(imageCount === 0 ? images.length - 1 : imageCount - 1);
  };
  return (
    <div className='carousel'>
      <ArrowBackIosIcon
        className='carousel__arrow'
        onClick={handlePrevious}
      ></ArrowBackIosIcon>
      <img className='carousel__img' src={images[imageCount]} alt='' />
      <ArrowForwardIosIcon
        className='carousel__arrow'
        onClick={handleNext}
      ></ArrowForwardIosIcon>
    </div>
  );
};

export default Carousel;
