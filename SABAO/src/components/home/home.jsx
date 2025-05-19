import Navbar from '../navbar/navbar';
import Card from '../card/Card';
import './home.css';
import MainCard from '../MainCard/MainCard';
import LargeCard from '../LargeCard/LargeCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import OPBackground from '../../assets/onepiece-background.jpg';
import luffy from '../../assets/luffy-gear-5-colored.png'
import OPLOGO from '../../assets/One-Piece-Logo.png'


function Home(){
    return(
        <>
        <Navbar/>
        <div className = "main">
            <div className = "banner">
                <img className = "background"src={OPBackground} alt="" />
                <div className="thegoat">
                    <img className ="luffy" src={luffy} alt="" />
                    <img src={OPLOGO} alt="" className="oplogo" />
                </div>
            </div>
            <div>
                <div className="mvs">
                    <h2>MOST VIEWED STORIES</h2>
                </div>
                <div className = "carousel">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <div>
                <div className="mvs">
                    <h2>FEATURED AUTHORS</h2>
                </div>
            </div>
            <div>
                <div className="mvs">
                    <h2>RECENTLY UPDATED</h2>
                </div>
                <div className="grid">
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                </div>
            </div>
            <div>
                <div className="mvs">
                    <h2>RECENTLY ADDED</h2>
                </div>
                <div className="newrapper">
                    <LargeCard/>
                    <LargeCard/>
                    <LargeCard/>
                    <LargeCard/>
                    <LargeCard/>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Home;