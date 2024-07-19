import React from 'react';
import './Team.css';
import { Box, Grid } from '@mui/material';

export default function Team() {
  const imgTeam = [
    { id: 1, src: './uploads/6/content/1.png' },
    { id: 2, src: './uploads/6/content/2.png' },
    { id: 3, src: './uploads/6/content/3.png' },
  ];

  const imgTeams = imgTeam.map((img) => {
    return (
      <Grid
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        key={img.id}
        item
        xs={12}
        sm={6}
        md={4}
      >
        <img className="img-Team-Content" src={img.src} alt="" />
      </Grid>
    );
  });

  return (
    <div className="Team">
      <Box sx={{display:{md:"none",sm:"block"},color:"white",fontSize:"50px",textAlign:"center"}}>  </Box>
      <div className="h-5vh"></div>
      <div className="img-Team">
      </div>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '140vh',position:"absolute" ,top: 0,width:"100%",margin:"auto"
          }}
          container
          spacing={0}
        >
          {imgTeams}
        </Box>
    </div>
  );
}
// .img-Team {
//   position: absolute;
//   z-index: -2;
//   top: 0;
//   width: 100%;
//   height: 140vh;
//   position: relative;
//   background-image: url("./../../../public/uploads/6/text/textandline.png");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 90%;
//   margin: auto;
// }