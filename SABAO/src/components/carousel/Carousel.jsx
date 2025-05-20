import { useMemo, useEffect } from 'react';
import Card from '../card/Card';
import {books} from '../../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/js/dist/carousel'; // explicitly import carousel behavior
import { Carousel as BsCarousel } from 'bootstrap';
import './Carousel.css';

export default function Carousel() {
  // Group books into chunks of 3 per slide
  const groupedBooks = useMemo(() => {
    const result = [];
    for (let i = 0; i < books.length; i += 3) {
      result.push(books.slice(i, i + 3));
    }
    return result;
  }, [books]);

useEffect(() => {
    // Manually initialize Bootstrap carousel behavior
    const carouselEl = document.querySelector('#bookCarousel');
    if (carouselEl) {
      new BsCarousel(carouselEl, {
        interval: false,
        wrap: true
      });
    }
  }, []);

return (
<div id="bookCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
    <div className="carousel-inner">
    {groupedBooks.map((books, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
        <div className="d-flex justify-content-center gap-3">
            {books.map((book) => (
            <Card key={book.id} book={book} />
            ))}
        </div>
        </div>
    ))}
    </div>

    {/* Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#bookCarousel" data-bs-slide="prev">
        <span className = "arrows">&#8249;</span>
        <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#bookCarousel" data-bs-slide="next">
        <span className = "arrows">&#8250;</span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
);
}

