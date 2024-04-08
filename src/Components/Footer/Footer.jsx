import React from 'react';
import './Footer.css'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <footer className="footer contacts">
      <div className="container1">
        <h1 className="footer__title">Contact Us</h1>
        <div className="footer__contacts">
          {/* Add your actual contact details here */}
          {/* <p>Email: contact@prakruti.com</p> */}
          <p>Anuj Kahyap: +91 83192 81801</p>
          <p>Kunj Bihari Singh: +91 63867 51585</p>
        </div>
        <div className="footer__social">
          <a href="https://www.linkedin.com/company/prakruti-nitt/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
          <i class="ri-linkedin-box-line"></i>
          </a>
          <a href="https://www.instagram.com/prakrutinitt/" target="_blank" rel="noopener noreferrer">
          <i class="ri-instagram-line"></i>
          </a>
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FElgkEA1SOeABTbHplvGzIL&e=AT1G4-FuYnwURcjNq1YHXGNVujmnwsn0Z7Y6V3mzFMkBYFAU3JpHCvdjv-gPxMepKJR97Wv3o0yuPVDqBF1fs6oxxlGdJExPVnBdKRw" target="_blank" rel="noopener noreferrer">
  <i class="ri-whatsapp-line"></i>
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
