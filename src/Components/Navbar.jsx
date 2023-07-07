
import { SearchIcon } from '@chakra-ui/icons';
import { Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.JPG";

import "./styles.css";
const Navbar = () => {

    return (
            <div className="nav-center" >
                <div className="nav-header">
                    <Link to="/">
                    <img src={logo} alt="The Furniture Store." style={{width:"50px"}}/>
                    </Link>
                
                    <Link to="/product"><Text fontSize='xl'>Chairs</Text></Link>
                    <Link to="/product"><Text fontSize='xl'>Tables</Text></Link>
                    <Link to="/product"><Text fontSize='xl'>Lamps</Text></Link>
                    <Link to="/product"><Text fontSize='xl'>Sofas</Text></Link>
                    <Link to="/product"><Text fontSize='xl'>Cases</Text></Link>
                    <Link to="/product"><Text fontSize='xl'>Other</Text></Link>
                </div>
                {/* <div className="nav-links">
                    <Link to="/"><Text fontSize='xl'>Home</Text></Link>
                    <Link to="/about"><Text fontSize='xl'>About</Text></Link>
                    <Link to="/product"><Text fontSize='xl'>Products</Text></Link>
                </div> */}
                <div className="cart">
                
                <SearchIcon/><Input variant='flushed' placeholder='Search place ' />
                <Link to="/login"><Text fontSize='xl'>wishlist</Text></Link>
                
                <Link to="/cart"><Text fontSize='xl'>Cart</Text></Link>
                <Link to="/login"><Text fontSize='xl'>Login</Text></Link>
                </div>
                
            </div>
    );
};
export default Navbar;
