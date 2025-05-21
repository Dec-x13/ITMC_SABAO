import Navbar from '../navbar/navbar';
import GenreNav from '../genre nav/genrenav';
import './genres.css';
import CardGrid from '../CardGrid/cardgrid';

function Genres(){
    return(
        <>
        <Navbar/>
        <GenreNav/>
            <div className="scrollable-container">
            <div className="genre-page">
            <CardGrid/> 
            </div>
            </div>
        </>
        
    )
}

export default Genres;