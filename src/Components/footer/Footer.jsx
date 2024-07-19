import React from 'react';
import './footer.css';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function Footer() {
  return (
    <div className="footer">
      <div className="bg-footer">
        <Box className="overlay">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className="text-uppercase fw-bold">
                <img className='color-g2' src="./uploads/end/text/qu/r.png" alt=""/>
                Contact Us
                </Typography>
                <Typography className="contact-item">
                <RoomIcon className='color-g'/>  Office 1306, Dusit Thani Al Muroor St Abu Dhabi, United Arab Emirates
                </Typography>
                <Typography className="contact-item">
                <CallIcon className='color-g'/>  +971502135701
                </Typography>
                <Typography className="contact-item">
                <WhatsAppIcon className='color-g'/>  +971502135701
                </Typography>
                <Typography className="contact-item">
                <MailIcon className='color-g'/>  info@seattle-me.com
              info@seattle-me.com
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className="text-uppercase fw-bold">
             <img className='color-g' src="./uploads/end/text/qu/r.png" alt=""/>
                Quick Links
                </Typography>
                <Typography><Link href="#!" color="inherit" className="link">   <FiberManualRecordIcon className='color-g2'/> About Us</Link></Typography>
                <Typography><Link href="#!" color="inherit" className="link"> <FiberManualRecordIcon className='color-g2'/> Services</Link></Typography>
                <Typography><Link href="#!" color="inherit" className="link"> <FiberManualRecordIcon className='color-g2'/> News</Link></Typography>
                <Typography><Link href="#!" color="inherit" className="link"> <FiberManualRecordIcon className='color-g2'/> Videos</Link></Typography>
                <Typography><Link href="#!" color="inherit" className="link"> <FiberManualRecordIcon className='color-g2'/> Careers</Link></Typography>
              </Grid>
            </Grid>

            <Grid container sx={{width:"105%"}} spacing={0} justifyContent="end" alignItems={"end"} className="social-media">
              <Grid item>
                <Link href="https://www.facebook.com" color="inherit">
                <img className="icon"  src="./uploads/end/icon social/facebook_1384005.png" alt=""/>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.twitter.com" color="inherit">
                <img className="icon"  src="uploads/end/icon social/instagram_1384015.png" alt=""/>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.instagram.com" color="inherit">
                <img className="icon"  src="./uploads/end/icon social/linkedin_1384014.png" alt=""/>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.linkedin.com" color="inherit">
                <img className="icon"  src="./uploads/end/icon social/snapchat_3669965.png" alt=""/>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.snapchat.com" color="inherit">
                <img className="icon"  src="./uploads/end/icon social/threads.png" alt=""/>
 
                </Link>
              </Grid>
           
             
            </Grid>
            <div className="copyright">
              © 2024 All Rights Reserved - Seattle & Middle East Group
            </div>
          </Container>
          </Box>

      </div>
    </div>
  );
}
