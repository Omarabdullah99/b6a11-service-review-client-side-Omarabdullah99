import React from 'react';
import sliderone from '../../assest/banner/banner1.jpg'
import slidertwo from '../../assest/banner/banner2.jpg'
import sliderthree from '../../assest/banner/banner3.jpg'
import sliderfour from '../../assest/banner/banner4.jpg'


const Banner = () => {
    return (
        <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative bg-cover w-full rounded-xl ">
          <img src={sliderone} alt='' className="w-full h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full ">
          <img src={slidertwo} alt='' className="w-full h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full ">
          <img src={sliderthree} alt='' className="w-full h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={sliderfour}alt='' className="w-full h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default Banner;