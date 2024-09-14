import React from 'react';
import './Hero.css';
import headerImage from '../../assets/header-img.jpg';  // Import the image

const Hero = () => {
  return (
    <section
      className="hero" id="hero"
      style={{ backgroundImage: `url(${headerImage})` }}  // Use the imported image in inline style
    >
      <div className="hero-content">
        <h1 data-aos="fade-up" data-aos-delay="100">Discover Your Next Favorite Book</h1>
        <p data-aos="fade-up" data-aos-delay="300">Explore a wide variety of genres and find the perfect read.</p>
        <a href="/buy-books" className="hero-button" data-aos="fade-up" data-aos-delay="500">Buy Books</a>
      </div>
    </section>
  );
};

export default Hero;
