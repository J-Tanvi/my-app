// Filename - Home.jsx

import React from "react";
import {
    Router,
    RouterProvider,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Page404 from "../components/Page404";


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
        </div>
    )
}
export default Home;