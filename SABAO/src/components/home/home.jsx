import Navbar from '../navbar/navbar';
import Card from '../card/Card';
import './home.css';

function Home(){
    return(
        <>
        <Navbar/>
         <div className = "carousel">
            <Card/>
            <Card/>
            <Card/>
         </div>
        </>
        
    )
}

export default Home;