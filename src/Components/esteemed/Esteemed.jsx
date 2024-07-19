import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Esteemed.css'; // تأكد من إضافة ملف CSS لتنسيق الصور

export default function Esteemed() {
const imgEsteemed=[
    {id:1,src:"./uploads/4/لوجوهات الشركاء/1.png"},
    {id:2,src:"./uploads/4/لوجوهات الشركاء/2.png"},
    {id:3,src:"./uploads/4/لوجوهات الشركاء/3.png"},
    {id:4,src:"./uploads/4/لوجوهات الشركاء/4.png"},
    {id:5,src:"./uploads/4/لوجوهات الشركاء/5.png"},
    {id:6,src:"./uploads/4/لوجوهات الشركاء/6.png"},
    {id:7,src:"./uploads/4/لوجوهات الشركاء/7.png"},
    {id:8,src:"./uploads/4/لوجوهات الشركاء/8.png"},
    {id:9,src:"./uploads/4/لوجوهات الشركاء/9.png"},
    {id:10,src:"./uploads/4/لوجوهات الشركاء/10.png"},
    {id:11,src:"./uploads/4/لوجوهات الشركاء/11.png"},
    {id:12,src:"./uploads/4/لوجوهات الشركاء/12.png"},
    {id:13,src:"./uploads/4/لوجوهات الشركاء/13.png"},
    {id:14,src:"./uploads/4/لوجوهات الشركاء/14.png"},
    {id:15,src:"./uploads/4/لوجوهات الشركاء/15.png"},
    {id:16,src:"./uploads/4/لوجوهات الشركاء/16.png"},
    {id:17,src:"./uploads/4/لوجوهات الشركاء/17.png"},
    {id:18,src:"./uploads/4/لوجوهات الشركاء/18.png"},
    {id:19,src:"./uploads/4/لوجوهات الشركاء/19.png"},
    {id:20,src:"./uploads/4/لوجوهات الشركاء/20.png"},
    {id:21,src:"./uploads/4/لوجوهات الشركاء/21.png"},
    {id:22,src:"./uploads/4/لوجوهات الشركاء/22.png"},
    {id:23,src:"./uploads/4/لوجوهات الشركاء/23.png"},
    {id:24,src:"./uploads/4/لوجوهات الشركاء/24.png"},
    {id:25,src:"./uploads/4/لوجوهات الشركاء/25.png"},
    {id:26,src:"./uploads/4/لوجوهات الشركاء/26.png"},
    {id:27,src:"./uploads/4/لوجوهات الشركاء/27.png"},
    {id:28,src:"./uploads/4/لوجوهات الشركاء/28.png"},
    {id:29,src:"./uploads/4/لوجوهات الشركاء/29.png"},
    {id:30,src:"./uploads/4/لوجوهات الشركاء/30.png"},
    {id:31,src:"./uploads/4/لوجوهات الشركاء/31.png"},
]


  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 6,
    focusOnSelect: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      document.querySelectorAll('.slick-slide').forEach((slide) => {
        slide.style.opacity = '1.5';
      });
      document.querySelectorAll('.slick-center').forEach((slide) => {
        slide.style.opacity = '1';
      });
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='Esteemed'>
      <div className="grop-title3">
        <div className="img-dis2">
          <img src="./uploads/2/text/مريع جانبي 1.png" alt="مريع" />
        </div>
        <div className="title-dis2">
          <h2>Our Esteemed Partners</h2>
          <h3>We take pride in our collaborations and successes with these distinguished entities:</h3>
        </div>
      </div>
      <div className='h-5vh'></div>
      <div className="container">
        <div className="slider-container">
        
          <Slider {...settings}>
     {imgEsteemed.map((img)=>{
        return <div  key={img.id}><img className='img-Esteemed' src={img.src} alt="" /></div>

     })

     }
          </Slider>
          <div className='h-5vh'></div>

        </div>
      </div>
    </div>
  );
}
