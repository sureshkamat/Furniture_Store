
import { Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import HomeImg from "./Home.png";
import "./home.css";
const Headers = () => {
    

    return (
        <main className="home-side">
            <section>
            <p>Are you looking for <br></br><span>wooden furniture</span> for <br></br>your place?</p>
            <h1>This is the <br></br>Right Place</h1>
            <Link to="/product"><Button colorScheme='yellow' size='lg'>
            Explore Categories
            </Button></Link>
            </section>
            <img src={HomeImg} alt="" />
        </main>
     );
}
 
export default Headers;