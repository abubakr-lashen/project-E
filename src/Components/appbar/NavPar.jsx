import React from 'react';
import { Box, Typography } from '@mui/material';
import './nav.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Discover() {
  return (
    <div className="nav-par">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img width="220px" src="./uploads/1/header/LOGO.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT US <ExpandMoreIcon className='color-g1'/>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  SERVICE
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  COMPANIES<ExpandMoreIcon className='color-g1'/>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MEDIA CENTER<ExpandMoreIcon className='color-g1'/>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  CAREERS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
                width: "auto"
              }}
            >
              <a href="tel:+971502135701" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{ color: '#D6C48B', p: '10px', fontWeight: "bold" }}
                >
                  +971502135701
                </Typography>
              </a>
              <div className="click-button">
                <img
                  width="130px"
                  height="30"
                  src="./uploads/1/header/get.png"
                  alt="Get"
                />
              </div>
              <Typography variant="body1" className="en-ar">
                <div style={{ position: 'relative', right: '-20px' }}>
                  العربيه
                </div>
              </Typography>
            </Box>
          </div>
        </div>
      </nav>
    </div>
  );
}
