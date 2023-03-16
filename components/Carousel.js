import React from "react";
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineArrowLeft, IconName } from "react-icons/ai";
const PrevArrow = props => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <AiOutlineArrowLeft />
        {/* <i className="fa fa-angle-left" ></i> */}
      </div>
    );
  };
  
  const NextArrow = props => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    );
  };
  

function Carousel() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1678931548103-1e3944b899e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1678935001091-3f1116b2be34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1676486613065-539b114beeff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Image 3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
