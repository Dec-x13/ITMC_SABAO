import React, { useState } from 'react';
import "./LargeCard.css";

function LargeCard() {
    return(
        <div className = "lcardWrapper">
            <div className = "lstoryImage">
                <img src="src\assets\onepiece.jpg" alt="" />
            </div>
            <div className = "ltitlewrapper">
                <h2 className = "ltitle">One Piece</h2>
            </div>
        </div>
    )
}

export default LargeCard;