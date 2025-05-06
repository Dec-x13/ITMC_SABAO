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
            <Card/>
            <Card/>
         </div>
         <div className="container">
            <div className="row">
                <div class="col">
                <MainCard/>
                </div>
                <div class="col">
                <MainCard/>
                </div>
                <div class="col">
                <MainCard/>
                </div>
                <div class="col">
                <MainCard/>
                </div>
                <div class="col">
                <MainCard/>
                </div>
                <div class="col">
                <MainCard/>
                </div>
                <div class="col">
                <MainCard/>
                </div>
                <div class="col">
                <MainCard/>
                </div>
                <div class="col">
                <MainCard/>
                </div>
            </div>
            </div>
            
        </>
        
    )
}

export default Home;