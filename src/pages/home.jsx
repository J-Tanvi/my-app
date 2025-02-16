// Filename - Home.jsx

import React from "react";
import {
    Router,
} from "react-router-dom";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>EmoQuest</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/diary">Diary</Link>
            </nav>
            <Router />
        </div>
    )
}
export default Home;

/*
const Home = () => {
    return (
        <div>
            <header>EmoQuest</header>
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </div>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component *//*}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component *//*
                    <Link to="/about">About</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component *//*}
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </div>
    );
};


export default Home;
*/