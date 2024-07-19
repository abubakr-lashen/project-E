import React from 'react';
import './Sevrvices.css';
import { Grid } from '@mui/material';

export default function Sevrvices() {
  const imgSevrvices = [
    { id: 1, src: './uploads/5/content/1.png' },
    { id: 2, src: './uploads/5/content/2.png' },
    { id: 3, src: './uploads/5/content/3.png' },
    { id: 4, src: './uploads/5/content/4.png' },
    { id: 5, src: './uploads/5/content/5.png' },
    { id: 6, src: './uploads/5/content/6.png' },
  ];

  const ser = imgSevrvices.map((img) => {
    return (
      <Grid
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        key={img.id}
        item
        xs={12}
        sm={6}
        md={4}
      >
        <img className="img-Sevrvices" src={img.src} alt="" />
      </Grid>
    );
  });

  return (
    <>
      <div className="Sevrvices">
        <div className="h-5vh"></div>
        <div className="grop-title4">
          <div className="img-dis3">
            <img src="./uploads/2/text/مريع جانبي 1.png" alt="مريع" />
          </div>
          <div className="title-dis3">
            <h2>Our SERVICES</h2>
            <h3>SEATTLE & MIDDLE EAST GROUP OFFERS A VARIETY OF SERVICES IN THE REAL ESTATE INDUSTRY</h3>
          </div>
        </div>
        <div className="h-5vh"></div>

        <Grid container spacing={2}>
          {ser}
        </Grid>
        <div className="h-5vh"></div>

      </div>
    </>
  );
}
