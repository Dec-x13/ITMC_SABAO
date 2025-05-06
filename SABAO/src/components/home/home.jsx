import Navbar from '../navbar/navbar';
import Card from '../card/Card';
import './home.css';
import MainCard from '../MainCard/MainCard';
import LargeCard from '../LargeCard/LargeCard';

function Home(){
    return(
        <>
        <Navbar/>
         <div className = "carousel">
            <Card/>
         </div>
            <MainCard/>
            <LargeCard/>
        </>
        
    )
}

export default Home;