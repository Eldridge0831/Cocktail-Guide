import React from 'react';
import logo2 from '../logo2.svg';
import { Container, Navbar } from 'react-bootstrap';

import {
    Link
} from 'react-router-dom';

function TopNav (props) {
    return (
        <Container>
            <Navbar className = "topNav" expand="lg" variant="dark">
                <img src={logo2} alt="Logo" width = "40rem" />
                <Link to = "/home" style={{ textDecoration: 'none'}} className = "nav-link">Home</Link>
                <Link to = "/about" style={{ textDecoration: 'none'}} className = "nav-link">About Us</Link>
                <Link to = "/name" style={{ textDecoration: 'none'}} className = "nav-link">Drinks by Name</Link>
                <Link to = "/letter"style={{ textDecoration: 'none'}} className = "nav-link">Drink List by Letter</Link>
                <Link to = "/drink" style={{ textDecoration: 'none'}} className = "nav-link">Your Drink</Link>
            </Navbar>
        </Container>
    );
}

export default TopNav;