import { useState, useMemo } from 'react';
import Card from '../card/Card';
import { books } from '../../data/data';
import './Carousel.css';

export default function CardCarousel() {
  // Create a looped array of books, ensuring it has enough items to scroll smoothly
  const groupedBooks = useMemo(() => {
    const result = [];
    for (let i = 0; i < books.length; i++) {
      result.push(books[i]); // Store the books in an array
    }
    // Duplicate the books array to make it loop smoothly
    return [...result, ...result]; // Duplicate to make sure we can scroll infinitely
  }, []);

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next card set
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      // Move to the next index, looping back to the start when reaching the end
      if (prevIndex < groupedBooks.length - 3) {
        return prevIndex + 1; // Move forward by 1 card
      } else {
        return 0; // Loop back to the start
      }
    });
  };

  // Move to the previous card set
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      // Move backward by 1 card, looping to the end if we're at the start
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return groupedBooks.length - 3; // Loop back to the last set of 3 cards
      }
    });
  };

  return (
    <div className="carousel-container">
      <button className="carousel-control-prev" onClick={handlePrev}>
        <span className="arrows">&#8249;</span>
        <span className="visually-hidden">Previous</span>
      </button>

      <div className="carousel">
        <div className="carousel-inner d-flex">
          {/* Show the current 3 books */}
          <div className="d-flex">
            {groupedBooks.slice(currentIndex, currentIndex + 3).map((book, index) => (
              <Card key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>

      <button className="carousel-control-next" onClick={handleNext}>
        <span className="arrows">&#8250;</span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
