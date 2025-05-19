import "./MainCard.css";
import { Link } from 'react-router-dom';

function MainCard({book}) {
    return (
        <Link to="/story/1" className = "mcardWrapper">
            <div className = "mstoryImage">
                <img src={book.coverImage} alt="" />
            </div>
            <div className = "minfoWrapper">
                <h3 className = "mbranches">Total Branches: 100</h3>
                <h3 className = "mtitle">{book.title}</h3>
                <div className = "chapterWrapper">
                    <div className = "chapter-btn">
                        <h3 className = "chapterNum">Chapter 100</h3>
                        <h3 className = "updateTime">5 minutes ago</h3>
                    </div>
                    <div className = "chapter-btn">
                        <h3 className = "chapterNum">Chapter 99</h3>
                        <h3 className = "updateTime">7 days ago</h3>
                    </div>
                    <div className = "chapter-btn">
                        <h3 className = "chapterNum">Chapter 98</h3>
                        <h3 className = "updateTime">14 days ago</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MainCard;