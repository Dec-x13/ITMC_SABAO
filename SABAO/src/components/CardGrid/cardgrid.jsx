import React from 'react';
import MainCard from '../MainCard/MainCard';
import { books } from '../../data/data';
import './CardGrid.css';

const MainCardGrid = Array.from({ length: 30 }, () => {
  const randomIndex = Math.floor(Math.random() * books.length);
  return books[randomIndex];
});

const CardGrid = () => {
  return (
    <div className="cards-grid">
      <div className="grid">
                    {MainCardGrid.map((book, index) => (
                        <MainCard key={index} book={book} />
                    ))}
              </div>
    
    </div>
  );
};

export default CardGrid;