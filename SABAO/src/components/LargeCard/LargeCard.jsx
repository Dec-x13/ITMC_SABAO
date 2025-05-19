import React, { useState } from 'react';
import "./LargeCard.css";
import { Link } from 'react-router-dom';

function LargeCard() {
    return(
        <Link to="/story/1" className = "lcardWrapper">
            <div className = "lstoryImage">
                <img src="src\assets\onepiece.jpg" alt="" />
            </div>
            <div className = "ltitlewrapper">
                <h2 className = "ltitle">One Piece</h2>
            </div>
        </Link>
    )
}

export default LargeCard;