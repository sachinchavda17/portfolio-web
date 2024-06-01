import React, { useEffect, useState } from 'react';
import './carouselStyle.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Carousel = ({ images, showBtn = true, autoplay = true, autoplayInterval = 5000  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    let timeoutId;

    if (autoplay && images.length > 1) {
      timeoutId = setTimeout(() => {
        goToNextSlide();
      }, autoplayInterval);
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, images.length, autoplay, autoplayInterval]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} className='modal-image' />
          </div>
        ))}
      </div>
      {
        showBtn && images.length > 1 &&
        <>
          <button className="carousel-prev" onClick={goToPrevSlide}><FaAngleLeft /></button>
          <button className="carousel-next" onClick={goToNextSlide}><FaAngleRight /></button>
        </>
      }
    </div>
  );
};

export default Carousel;
