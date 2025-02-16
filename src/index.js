//./src/routes/index.js

import React from "react"
import PathConstants from "./routes/pathConstants"

const Home = React.lazy(() => import("./pages/home"));
const Diary = React.lazy(() => import("./pages/diary"));
const Contact = React.lazy(() => import("./pages/contactUs"));

const routes = [
  {path: PathConstants.HOME, element: <Home /> },
  {path: PathConstants.DIARY, element: <Diary /> },
  {path: PathConstants.CONTACTUS, element: <Contactus /> },
]

export default routes

/*
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {

  return (
    <div>
      <div class="topnav">
        <a class="active" href="#home">EmoQuest</a>
        <a href="#diary">Diary</a>
        <a href="#about">About</a>
      </div>
      <div class="content">
        <h1>EmoQuest</h1>
        <h3>Welcome to EmoQuest! Start your emotional journey today!</h3>
      </div>
    </div>
  );
}

export default App;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/