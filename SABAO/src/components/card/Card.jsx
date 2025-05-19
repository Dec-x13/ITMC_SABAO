import "./Card.css";
import { Link } from 'react-router-dom';


function Card({book}) {
    return (
        
        <Link key = {book.id}to="/story/1"className = "cardWrapper">
            <div className = "infoWrapper">
                <h3 className = "status">Releasing</h3>
                <h2 className = "title">{book.title}</h2>
                <h3 className = "desc">{book.description}</h3>
                <h3 className = "branches">Total Branches: 100</h3>
                <h3 className = "genre">{book.genres.join(', ')}</h3>
            </div>
            <div className = "storyImage">
                <img src={book.coverImage} alt="" />
            </div>
        </Link>
        
        
    )
}

export default Card;