import React from 'react'
import "./Testimonials.css"
import Slider from 'react-slick';
export default function Testimonials() {
    const imgTestimonials= [
        { id: 1, src: './uploads/7/content/1.png' },
        { id: 2, src: './uploads/7/content/2.png' },
        { id: 3, src: './uploads/7/content/3.png' },
        { id: 4, src: './uploads/7/content/4.png' },
        { id: 5, src: './uploads/7/content/5.png' },
      ];
    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        focusOnSelect: true,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
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
 <>
 
 <div className='Testimonials'>
 <div className="h-5vh"></div>
        <div className="grop-title4">
          <div className="img-dis3">
            <img src="./uploads/2/text/مريع جانبي 1.png" alt="مريع" />
      </div>
      <div className="title-dis3">
            <h2>CLIENT'S TESTIMONIALS</h2>
            <h3>WE BUILD TRUST, WE OFFER PROFESSIONALISM</h3>
          </div>
      
      </div>
      <div className="bg-body1">
        <div className="photo-phone">
   
        <Slider {...settings}>
     {imgTestimonials.map((imgt)=>{
        return <div  key={imgt.id}><img className='img-Esteemed1' src={imgt.src} alt="" /></div>

     })

     }
          </Slider>
        </div>
      </div>
      </div>
 </>
  )
}
