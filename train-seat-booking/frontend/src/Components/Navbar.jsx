import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@chakra-ui/react';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="nav-container" >
        <Link to="/" ><Button _hover={{bg:"teal"}}>Home</Button></Link>
        <Link to="/user"><Button _hover={{bg:"teal"}}>User</Button></Link>  
    </div>
  )
}

export default Navbar