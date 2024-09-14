import React, { useState } from 'react';
import './Genre.css';
import AOS from 'aos';
import { useSpring, animated } from '@react-spring/web';

import 'aos/dist/aos.css'; // import AOS styles

// Import images
import fantasyImg from '../../assets/genre-1.jpg';
import sciFiImg from '../../assets/genre-2.jpg';
import mysteryImg from '../../assets/genre-3.jpg';
import romanceImg from '../../assets/genre-4.jpg';
import thrillerImg from '../../assets/genre-5.jpg';
import historicalImg from '../../assets/genre-6.jpg';
import horrorImg from '../../assets/genre-7.jpg';
import nonFictionImg from '../../assets/genre-8.jpg';
import Hobbit from '../../assets/hobbit.jpg';
import HarryPotter from '../../assets/harryPotter.jpg';
import Wind from '../../assets/wind.jpg';
import Lies from '../../assets/lies.jpg';
import Dune from '../../assets/dune.jpg';
import neuro from '../../assets/neuro.jpg';
import snow from '../../assets/snow.jpg';
import lh from '../../assets/lh.jpg';
import Sherlock from '../../assets/sherlock.jpg';
import goneGirl from '../../assets/gonegirl.jpg';
import littleLies from '../../assets/littlelies.jpg';
import vinciCode from '../../assets/vincicode.jpg';
import Pride from '../../assets/pride.jpg';
import notebook from '../../assets/notebook.jpg';
import outlander from '../../assets/outlander.jpg';
import beforeYou from '../../assets/beforeyou.jpg';
import dragonTattoo from '../../assets/dragon.jpg';
import silentPatient from '../../assets/silentpatient.jpg';
import Girl from '../../assets/gonegirll.jpg';
import Window from '../../assets/window.jpg';
import Light from '../../assets/light.jpg';
import bookTheif from '../../assets/booktheif.jpg';
import Nightingale from '../../assets/nightingale.jpg';
import Tattooist from '../../assets/tattooist.jpg';
import it from '../../assets/it.jpg';
import Shining from '../../assets/shining.jpg';
import dracula from '../../assets/dracula.jpg';
import Frankenstein from '../../assets/Frankenstein.jpg';
import Sapiens from '../../assets/Sapiens.jpg';
import Educated from '../../assets/Educated.jpg';
import Becoming from '../../assets/Becoming.jpg';
import HenriettaLacks from '../../assets/HenriettaLacks.jpg';

// Sample data for books
const genres = [
  { name: 'Fantasy', image: fantasyImg },
  { name: 'Science Fiction', image: sciFiImg },
  { name: 'Mystery', image: mysteryImg },
  { name: 'Romance', image: romanceImg },
  { name: 'Thriller', image: thrillerImg },
  { name: 'Historical Fiction', image: historicalImg },
  { name: 'Horror', image: horrorImg },
  { name: 'Non-Fiction', image: nonFictionImg }
];

const booksByGenre = {
  Fantasy: [
    { title: 'The Hobbit', image: Hobbit, price: 10.99, rating: 4.5 },
    { title: 'Harry Potter', image: HarryPotter, price: 15.99, rating: 5 },
    { title: 'The Name of the Wind', image: Wind, price: 12.99, rating: 4.7 },
    { title: 'The Lies of Locke Lamora', image: Lies, price: 14.99, rating: 4.8 }
  ],
  'Science Fiction': [
    { title: 'Dune', image: Dune, price: 12.99, rating: 4.8 },
    { title: 'Neuromancer', image: neuro, price: 9.99, rating: 4.2 },
    { title: 'Snow Crash', image: snow, price: 11.99, rating: 4.5 },
    { title: 'The Left Hand of Darkness', image: lh, price: 13.99, rating: 4.6 }
  ],
  Mystery: [
    { title: 'Sherlock Holmes', image: Sherlock, price: 11.99, rating: 4.7 },
    { title: 'Gone Girl', image: goneGirl, price: 13.99, rating: 4.6 },
    { title: 'Big Little Lies', image: littleLies, price: 10.99, rating: 4.4 },
    { title: 'The Da Vinci Code', image: vinciCode, price: 12.99, rating: 4.5 }
  ],
  Romance: [
    { title: 'Pride and Prejudice', image: Pride, price: 8.99, rating: 4.9 },
    { title: 'The Notebook', image: notebook, price: 7.99, rating: 4.8 },
    { title: 'Outlander', image: outlander, price: 11.99, rating: 4.6 },
    { title: 'Me Before You', image: beforeYou, price: 9.99, rating: 4.7 }
  ],
  Thriller: [
    { title: 'The Girl with the Dragon Tattoo', image: dragonTattoo, price: 14.99, rating: 4.4 },
    { title: 'The Silent Patient', image: silentPatient, price: 12.99, rating: 4.5 },
    { title: 'Gone Girl', image: Girl, price: 13.99, rating: 4.6 },
    { title: 'The Woman in the Window', image: Window, price: 11.99, rating: 4.3 }
  ],
  'Historical Fiction': [
    { title: 'All the Light We Cannot See', image: Light, price: 13.99, rating: 4.9 },
    { title: 'The Book Thief', image: bookTheif, price: 10.99, rating: 4.7 },
    { title: 'The Nightingale', image: Nightingale, price: 12.99, rating: 4.8 },
    { title: 'The Tattooist of Auschwitz', image: Tattooist, price: 11.99, rating: 4.6 }
  ],
  Horror: [
    { title: 'It', image: it, price: 15.99, rating: 4.3 },
    { title: 'The Shining', image: Shining, price: 12.99, rating: 4.6 },
    { title: 'Dracula', image: dracula, price: 9.99, rating: 4.5 },
    { title: 'Frankenstein', image: Frankenstein, price: 11.99, rating: 4.4 }
  ],
  'Non-Fiction': [
    { title: 'Sapiens', image: Sapiens, price: 16.99, rating: 4.8 },
    { title: 'Educated', image: Educated, price: 14.99, rating: 4.7 },
    { title: 'Becoming', image: Becoming, price: 18.99, rating: 4.9 },
    { title: 'The Immortal Life of Henrietta Lacks', image: HenriettaLacks, price: 13.99, rating: 4.6 }
  ]
};

const Genre = ({ addToCart }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  // Handle genre click
  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  // Animation for genre list
  const genreSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  // Animation for book list
  const bookSpring = useSpring({
    opacity: selectedGenre ? 1 : 0,
    transform: selectedGenre ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 }
  });

  return (
    <div className="genre-section" id="genre">
      <h2 className="genre-heading" data-aos="fade-up" data-aos-delay="100">Select a Genre</h2>
      <animated.div className="genre-list" style={genreSpring} data-aos="fade-up" data-aos-delay="300">
        {genres.map((genre) => (
          <div
            key={genre.name}
            className="genre-item"
            onClick={() => handleGenreClick(genre.name)}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img src={genre.image} alt={genre.name} className="genre-image" />
            <p>{genre.name}</p>
          </div>
        ))}
      </animated.div>

      <animated.div className="book-list" style={bookSpring} data-aos="fade-up" data-aos-delay="500">
        {selectedGenre && booksByGenre[selectedGenre] ? (
          <>
            <h3 className="book-heading" data-aos="fade-up" data-aos-delay="600">Books on {selectedGenre}</h3>
            <div className="book-cards">
              {booksByGenre[selectedGenre].map((book, index) => (
                <animated.div 
                  key={index} 
                  className="book-card" 
                  data-aos="fade-up" 
                  data-aos-delay={700 + index * 100}
                >
                  <img src={book.image} alt={book.title} className="book-image" />
                  <div className="book-info">
                    <h4>{book.title}</h4>
                    <p>Price: ${book.price.toFixed(2)}</p>
                    <p>Rating: {book.rating} ★</p>
                    <button className="add-to-cart" onClick={() => addToCart(book)}>
                      Add to Cart
                    </button>
                  </div>
                </animated.div>
              ))}
            </div>
          </>
        ) : (
          <p>Please select a genre to view books.</p>
        )}
      </animated.div>
    </div>
  );
};

export default Genre;
