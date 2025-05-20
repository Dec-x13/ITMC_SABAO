import { useMemo, useEffect } from 'react';
import Card from '../card/Card';
import { books } from '../../data/data';
import './Carousel.css';

// Import only the carousel module from Bootstrap (ESM-friendly)
import Carousel from 'bootstrap/js/dist/carousel';

export default function CardCarousel() {
  const groupedBooks = useMemo(() => {
    const result = [];
    for (let i = 0; i < books.length; i += 3) {
      result.push(books.slice(i, i + 3));
    }
    return result;
  }, []);

  useEffect(() => {
    // Manually initialize the Bootstrap carousel
    const carouselEl = document.querySelector('#bookCarousel');
    if (carouselEl) {
      new Carousel(carouselEl, {
        interval: false,
        wrap: true,
        ride: false
      });
    }
  }, []);

  return (
    <div id="#bookCarousel" className="carousel slide">
      <div className="carousel-inner">
        {groupedBooks.map((group, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex justify-content-center gap-3">
              {group.map((book) => (
                <Card key={book.id} book={book} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#bookCarousel" data-bs-slide="prev">
        <span className="arrows">&#8249;</span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#bookCarousel" data-bs-slide="next">
        <span className="arrows">&#8250;</span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
