import Navbar from '../navbar/navbar';
import Card from '../card/Card';
import './home.css';
import MainCard from '../MainCard/MainCard';
import LargeCard from '../LargeCard/LargeCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import OPBackground from '../../assets/onepiece-background.jpg';
import luffy from '../../assets/luffy-gear-5-colored.png'
import OPLOGO from '../../assets/One-Piece-Logo.png'
import profile1 from '../../assets/profiles/2.jpg'
import profile2 from '../../assets/profiles/30.jpg'
import profile3 from '../../assets/profiles/37.jpg'
import profile4 from '../../assets/profiles/65.jpg'
import profile5 from '../../assets/profiles/90.jpg'
import { books } from '../../data/data';
const MainCardGrid = Array.from({ length: 30 }, () => {
  const randomIndex = Math.floor(Math.random() * books.length);
  return books[randomIndex];
});
const LargeCardGrid = Array.from({ length: 5 }, () => {
  const randomIndex = Math.floor(Math.random() * books.length);
  return books[randomIndex];
});
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
                    {books.map((book) => (
                        <Card key={book.id} book={book} />
                    ))}
                </div>
            </div>
            <div>
                <div className="mvs">
                    <h2>FEATURED AUTHORS</h2>
                </div>
                <div className="authorwrapper">
                    <div className="authors">
                        <img src={profile1} alt="" className="dp" />
                        <h5 className="authorname">Dane Joe</h5>
                    </div>
                    <div className="authors">
                        <img src={profile2} alt="" className="dp" />
                        <h5 className="authorname">Anita Blackman</h5>
                    </div>
                    <div className="authors">
                        <img src={profile3} alt="" className="dp" />
                        <h5 className="authorname">Pablo Jobs</h5>
                    </div>
                    <div className="authors">
                        <img src={profile4} alt="" className="dp" />
                        <h5 className="authorname">Shana Larsen</h5>
                    </div>
                    <div className="authors">
                        <img src={profile5} alt="" className="dp" />
                        <h5 className="authorname">Sum Ting Wong</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="mvs">
                    <h2>RECENTLY UPDATED</h2>
                </div>
                <div className="grid">
                    {MainCardGrid.map((book, index) => (
                        <MainCard key={index} book={book} />
                    ))}
                </div>
            </div>
            <div>
                <div className="mvs">
                    <h2>RECENTLY ADDED</h2>
                </div>
                <div className="newrapper">
                    {LargeCardGrid.map((book, index) => (
                        <LargeCard key={index} book={book} />
                    ))}
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Home;