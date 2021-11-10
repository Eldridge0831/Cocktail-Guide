import React from 'react';
import logo2 from '../logo2.svg';

import {
    Link
} from 'react-router-dom';

function TopNav (props) {
    return (
        <div className = "topNav">
            <img src={logo2} alt="Logo" width = "40rem" />
            <Link to = "/home">Home</Link>
            <Link to = "/about">About Us</Link>
        </div>
    );
}

export default TopNav;