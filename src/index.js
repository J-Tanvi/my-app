
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="Menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div className="Welcome">
        <h1>Hello</h1>
        <h2>To start, click the three bars</h2>
        <div
          id="OverlayMenu"
          className="SideMenu"
          style={{ width: menuOpen ? "250px" : "0" }}
        >
          <a href="#" className="closebtn" onClick={() => setMenuOpen(false)}>
            &times;
          </a>
          <a href="Diary.html">Diary</a>
        </div>
      </div>
    </div>
  );
}

export default App;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
