import { Grid } from '@mui/material';
import React from 'react'
export default function INSIGHTS() {

    const imgINSIGHTS= [
        { id: 1, src: './uploads/8/1.png' },
        { id: 2, src: './uploads/8/2.png' },
        { id: 3, src: './uploads/8/2.png' },
        { id: 4, src: './uploads/8/2.png' },
      ];
      const imgINSIGHT = imgINSIGHTS.map((img) => {
        return (
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,mt:"30px"}}
            key={img.id}
            item
            xs={12}
            sm={6}
            md={3}
          >
            <img className="img-Sevrvices" src={img.src} alt="photo" />
          </Grid>
        );
      });
  return (
   <>
   
   <div className='INSIGHTS'> 
<div className="h-5vh"></div>
        <div className="grop-title4">
          <div className="img-dis3">
            <img src="./uploads/2/text/مريع جانبي 1.png" alt="مريع" />
      </div>
      <div className="title-dis3">
      <h2>INSIGHTS AND UPDATES</h2>
      <h3>STAY INFORMED WITH THE LATEST NEWS, UPDATES, AND EXPERT REAL ESTATE ADVICE FROM SEATTLE & MIDDLE EAST GROUP </h3>
            </div>
      </div>
            <Grid container spacing={2}>
          {imgINSIGHT   }
        </Grid>
      </div>
      <div className="h-5vh"></div>

   </>
  )
}
