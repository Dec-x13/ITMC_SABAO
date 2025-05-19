import React, { useState } from 'react';
import "./LargeCard.css";
import { Link } from 'react-router-dom';

function LargeCard( {book} ) {
    const titleLength = book.title.length;
    const fontSize = titleLength > 25 ? '16px' : '24px';

    return(
        <Link to="/story/1" className = "lcardWrapper">
            <div className = "lstoryImage">
                <img src={book.coverImage} alt="" />
            </div>
            <div className = "ltitlewrapper">
                <h2 className = "ltitle" style={{fontSize}}>{book.title}</h2>
            </div>
        </Link>
    )
}

export default LargeCard;