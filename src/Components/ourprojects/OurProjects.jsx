import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomSlider.css';
import "./OurProjects.css";
export default function OurProjects() {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => {
      document.querySelectorAll('.slick-slide').forEach((slide) => {
        slide.style.opacity = '0.5';
      });
      document.querySelectorAll('.slick-center').forEach((slide) => {
        slide.style.opacity = '0.5';
      });
    },
    responsive: [
      {
        breakpoint: 1024, // عند الشاشات المتوسطة
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600, // عند الشاشات الصغيرة
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className='OurProjects'>

        <div className="grop-title1">
          <div className="img-dis">
            <img src="./uploads/2/text/مريع جانبي 1.png" alt="مريع" />
          </div>
          <div className="title-dis1">
            <h2>OUR PROJECTS</h2>
            <h3>SEATTLE & MIDDLE EAST GROUP</h3>
          </div>
        </div>
        <div className='h-5vh'></div>

        <div className="slider-container">
          <Slider  {...settings}>
            <div className="slide-item">
              <img src="./uploads/3/Ansam.png" alt="Ansam" />
            </div>
            <div className="slide-item">
              <img src="./uploads/3/Gardenia Bay.png" alt="Gardenia" />
            </div>
            <div className="slide-item">
              <img src="./uploads/3/Mayan.png" alt="Mayan" />
            </div>
            <div className="slide-item">
              <img src="./uploads/3/Noya.png" alt="Noya" />
            </div>
            <div className="slide-item">
              <img src="./uploads/3/Sama.png" alt="Sama" />
            </div>
            <div className="slide-item">
              <img src="./uploads/3/Water's Edge.png" alt="Water's Edge" />
            </div>
            <div className="slide-item">
              <img src="./uploads/3/West Yas.png" alt="West Yas" />
            </div>
            <div className="slide-item">
              <img src="./uploads/3/Yas Acres.png" alt="Yas Acres" />
            </div>
            <div className="slide-item">
              <img src="./uploads/3/Yas Golf Collection.png" alt="Yas Golf Collection" />
            </div>
          </Slider>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <img src="./uploads/1/header/mobile.png" alt="mobile" />
          </div>
          <div>
            <img src="./uploads/1/header/whatsapp.png" alt="whatsapp" />
          </div>
        </div>
      </div>
    </>
  );
}