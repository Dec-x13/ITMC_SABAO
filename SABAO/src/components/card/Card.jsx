
import "./Card.css";

function Card() {
    return (
        <div className = "cardWrapper">
            <div className = "infoWrapper">
                <h3 className = "status">Releasing</h3>
                <h2 className = "title">One Piece</h2>
                <h3 className = "desc">
                    Gol D. Roger, a man referred to 
                    as the "Pirate King", is to be executed.
                </h3>
                <h3 className = "branches">Total Branches: 100</h3>
                <h3 className = "genre">Action, Shounen, Adventure</h3>
            </div>
            <div className = "storyImage">
                <img src="src\assets\onepiece.jpg" alt="" />
            </div>
        </div>
    )
}

export default Card;