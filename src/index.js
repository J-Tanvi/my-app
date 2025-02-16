//./src/routes/index.js

import React from "react"
import PathConstants from "./routes/pathConstants"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("./pages/home"));
const Diary = React.lazy(() => import("./pages/diary"));
const Contact = React.lazy(() => import("./pages/contactUs"));

const routes = [
  {path: '/', element: <Home /> },
  {path: '/diary', element: <Diary /> },
]

export default routes



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);