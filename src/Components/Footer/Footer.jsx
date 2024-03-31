import React from 'react';
import './Footer.css'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <footer className="footer contacts">
      <div className="container1">
        <h1 className="footer__title">CONTACT US</h1>
        <div className="footer__contacts">
          {/* Add your actual contact details here */}
          <p>Email: contact@prakruti.com</p>
          <p>Phone1: +1 234-567-890</p>
          <p>Phone2: +1 234-567-890</p>
        </div>
        <div className="footer__social">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i class="ri-linkedin-box-line"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i class="ri-instagram-line"></i>
          </a>
        </div>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Prakruti
        </p>
      </div>
    </footer>
  );
}

export default Footer;
