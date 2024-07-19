import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import CounterBox from "./CounterBox"; // تأكد من تحديث مسار الاستيراد وفقًا لموقع الملف
import "./Discover.css";

export default function Discover() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // لتجنب تشغيله أكثر من مرة
        }
      },
      {
        threshold: 0.1, // نسبة الظهور المطلوبة لبدء العد
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const counters = [
    { value: 25, title: "YEARS OF EXPERIENCE" },
    { value: 4, title: "COMPANIES" },
    { value: 10, title: "ACTIVITIES" },
    { value: 4, title: "COUNTRIES OF OPERATION" },
  ];

  return (
    <div className="Discover">
      <div className="body-img">
        {/* <div className="h-5vh"></div> */}
        <Grid
          container
          spacing={2}
          sx={{
            flexGrow: 1,
            width: "90%",
            m: "auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {counters.map((counter, index) => (
            <Grid key={index} item md={3} xs={6}>
              <div ref={sectionRef}>
                {inView && (
                  <CounterBox targetValue={counter.value} title={counter.title} />
                )}
              </div>
            </Grid>
          ))}
        </Grid>

        <div className="h-10vh"></div>

        <div className="grop-title">
          <div className="img-dis">
            <img src="./uploads/2/text/مريع جانبي 1.png" alt="" />
          </div>
          <div className="title-dis">
            <h2>Discover</h2>
            <h3>SEATTLE & MIDDLE EAST GROUP</h3>
          </div>
        </div>

        <div className="prgraf">
          <p>
            Seattle & Middle East Group is a leader in providing exceptional
            professional services across Real Estate, Travel, Contracting,
            Mortgage, and Digital Marketing. We are committed to delivering
            tailored solutions that meet the unique needs of our clients.
          </p>
          <p>
            Our expert team in Real Estate helps you find ideal residential,
            commercial, or investment properties. Our Travel Services offer
            seamless and memorable journeys, while our Mortgage team
            provides comprehensive financing guidance. Our Digital Marketing
            Agency boosts your brand's online presence with cutting-edge
            strategies.
          </p>
          <p>
            Professionalism, integrity, and customer satisfaction are our core
            values.
          </p>
        </div>

        <button className="btn-RE">Register your interest</button>

      </div>
    </div>
  );
}
