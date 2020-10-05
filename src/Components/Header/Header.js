import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Header.css'

const Header = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
        <Container> 
             <Navbar bg="transparent" variant="dark">
                <NavbarBrand><img src={logo} alt="logo"/></NavbarBrand>
                <Nav className="ml-auto">
                    <ul>
                        <Link to="/home"><li>Home</li></Link>
                        <Link to ="/donation"><li>Donation</li></Link>
                        <Link to='/my-tasks'><li>Events</li></Link> 
                        <Link to ="/blog"><li>Blog</li></Link>
                        { 
                            loggedInUser.email ? <h6 style={{display:"inline"}}>{loggedInUser.name}</h6>
                                               :<Button variant="primary">Register</Button>
                        }
                        <Link to="/admin-panel"><Button variant="dark">Admin</Button></Link>
                    </ul>
                </Nav>
            </Navbar>
        </Container>
        </div>
    );
};

export default Header;