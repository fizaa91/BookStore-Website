import React from 'react';
import './TopBooks.css';

// Import images
import book1 from '../../assets/midnight.jpg';
import book2 from '../../assets/CrawdadsSing.jpg';
import book3 from '../../assets/VanishingHalf.jpg';
import book4 from '../../assets/AddieLaRue.jpg';

// Sample data for top books this week
const topBooks = [
  { title: 'The Midnight Library', author: 'Matt Haig', image: book1, rating: 4.6 },
  { title: 'Where the Crawdads Sing', author: 'Delia Owens', image: book2, rating: 4.8 },
  { title: 'The Vanishing Half', author: 'Brit Bennett', image: book3, rating: 4.7 },
  { title: 'The Invisible Life of Addie LaRue', author: 'V.E. Schwab', image: book4, rating: 4.5 },
];

const TopBooks = () => {
  return (
    <section className="top-books-section" data-aos="fade-up" id="top-books">
      <h2>Top Books This Week</h2>
      <div className="top-books-list">
        {topBooks.map((book, index) => (
          <div key={index} className="top-book-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <img src={book.image} alt={book.title} className="top-book-image" />
            <div className="top-book-info">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p>Rating: {book.rating} ★</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBooks;
