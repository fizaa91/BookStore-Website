import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links" data-aos="fade-up">
          <ul className="footer-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social" data-aos="fade-up" data-aos-delay="300">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-aos="zoom-in" data-aos-delay="400">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-aos="zoom-in" data-aos-delay="500">
              <FaInstagram size={30} />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="social-icon" data-aos="zoom-in" data-aos-delay="600">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
        <p className="footer-note" data-aos="fade-up" data-aos-delay="700">© 2024 BookStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
