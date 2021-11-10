import React from 'react';
import logo2 from '../logo2.svg';

function Home (props) {
    return (
        <div className = "homePage">
            <img src={logo2} alt="Logo" width = "400rem" />
            <h1>The Drinker's Guide to the Galaxy</h1>
            <br/>
            <h2>What Should I Drink?</h2>
            <h2>And</h2>
            <h2>How Do I Make It?</h2>
        </div>
    );
}

export default Home;