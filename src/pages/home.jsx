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
        <div className="home">
            <h1>EmoQuest</h1>
            <nav>
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/contact-us">ChatBot</Link>
                <br></br>
                <Link to="/diary">Diary</Link>
            </nav>
        </div>
    )
}
export default Home;