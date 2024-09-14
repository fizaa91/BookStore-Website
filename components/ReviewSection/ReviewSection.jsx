import React, { useState } from 'react';
import './ReviewSection.css';
import 'aos/dist/aos.css';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { text: "Absolutely fantastic service and a great selection of books. Will definitely be back!", name: "Sarah", date: "2024-09-10" },
    { text: "The quality of the books is top-notch, and the customer service was excellent. Highly recommend!", name: "John", date: "2024-09-12" },
    { text: "A wonderful experience from start to finish. The reviews and recommendations are spot on.", name: "Emily", date: "2024-09-14" }
  ]);
  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText && reviewerName) {
      const newReview = {
        text: reviewText,
        name: reviewerName,
        date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
      setReviewerName('');
    }
  };

  return (
    <section className="review-section" data-aos="fade-up" id="review">
      <h2 data-aos="fade-down">Customer Reviews</h2>
      <div className="reviews-list" data-aos="fade-up" data-aos-delay="200">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="review-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.name}, {review.date}</p>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit} className="review-form" data-aos="fade-up" data-aos-delay="400">
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here..."
          rows="4"
        />
        <input
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          placeholder="Your Name"
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default ReviewSection;
