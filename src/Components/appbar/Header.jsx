import React, { useState, useEffect } from "react";
import video from "./BannerFinish.mp4";
import NavPar from "./NavPar";
import "./Header.css";
import { TextField, Snackbar, Alert, Box } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { v4 as uuidv4 } from 'uuid'; // For generating unique ids

export default function Header() {
  const [formData, setFormData] = useState({ name: "", phone: "+971" });
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [arr, setArr] = useState([]);
  const [language, setLanguage] = useState(navigator.language.startsWith('ar') ? 'ar' : 'en');

  useEffect(() => {
    // Determine the language based on the browser settings
    setLanguage(navigator.language.startsWith('ar') ? 'ar' : 'en');
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (newValue) => {
    setFormData(prevData => ({ ...prevData, phone: newValue }));

    const phoneLength = newValue.replace(/\D/g, '').length; // Remove non-numeric characters and get length
    if (phoneLength > 15 || phoneLength < 10) {
      setPhoneError(language === 'ar' ? "رقم الهاتف يجب أن يتراوح بين 10 و 15 رقماً" : "Phone number must be between 10 and 15 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleButtonClick = () => {
    const phoneLength = formData.phone.replace(/\D/g, '').length; // Remove non-numeric characters and get length

    // Validate name
    if (formData.name.trim() === "") {
      setNameError(language === 'ar' ? "الاسم لا يمكن أن يكون فارغاً" : "Name cannot be empty");
      return;
    } else {
      setNameError("");
    }

    // Validate phone number
    if (phoneLength > 15 || phoneLength < 10) {
      setPhoneError(language === 'ar' ? "رقم الهاتف يجب أن يتراوح بين 10 و 15 رقماً" : "Phone number must be between 10 and 15 digits");
      return;
    } else {
      setPhoneError("");
    }

    // If validation passes
    setSnackbarMessage(language === 'ar' ? "تم تسجيل اهتمامك بنجاح!" : "Your interest has been registered successfully!");
    setOpenSnackbar(true);

    // Add data to array
    const newEntry = { id: uuidv4(), ...formData };
    setArr(prevArr => {
      const updatedArr = [...prevArr, newEntry];
      console.log("Updated Array:", updatedArr); // Verify the array here
      return updatedArr;
    });

    // Perform any action with formData, e.g., sending to a server
    console.log("Saved Data:", formData);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="header-container">
      <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <NavPar />
      <div className="form-container">
        <Box className="form">
          <TextField
            className="input"
            sx={{
              width: "100%",
              maxWidth: "350px",
              mt: "20px",
              backgroundColor: "white",
              borderRadius: "21px",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
            id="name-field"
            name="name"
            placeholder={language === 'ar' ? "الاسم" : "Name"}
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          {nameError && (
            <p style={{ color: "red", fontSize: "14px" }}>{nameError}</p>
          )}
          <MuiTelInput
            className="input"
            sx={{
              width: "100%",
              maxWidth: "350px",
              mt: "10px",
              backgroundColor: "white",
              borderRadius: "21px",
              border: "none",
              outline: "none",
            }}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputProps={{ placeholder: language === 'ar' ? "رقم الهاتف" : "Phone Number" }}
          />
          {phoneError && (
            <p style={{ color: "red", fontSize: "14px" }}>{phoneError}</p>
          )}
          <button className="btn-register" onClick={handleButtonClick}>
            {language === 'ar' ? "سجل اهتمامك" : "Register your interest"}
          </button>
          <div className="contact-icons">
            <a href="tel:+971502135701" className="contact-icon-link">
              <img src="./uploads/1/header/mobile.png" alt="mobile" />
            </a>
            <a href="tel:+971502135701" className="contact-icon-link">
              <img src="./uploads/1/header/whatsapp.png" alt="whatsapp" />
            </a>
          </div>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
