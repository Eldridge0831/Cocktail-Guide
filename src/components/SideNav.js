import React from 'react';

import {
    Link
} from 'react-router-dom';

function SideNav (props) {
    return (
        <div className = "sideNav">
            <Link to = "/name">Drinks by Name</Link>
            <Link to = "/letter">Drink List by Letter</Link>
            <Link to = "/drink">Your Drink</Link>
        </div>
    );
}

export default SideNav;