import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Diary from "./pages/diary";
import Contact from "./pages/contactUs";
import Page404 from './components/Page404';

function ViteApp() {
  return (
    <div>
      <h2>Vite React App</h2>
      {/* Render the Vite build content */}
      <iframe
        src="/dist/index.html"  // path to the Vite app's entry point in public/dist
        title="Vite React App"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}


function App() {
  return (<>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
  </>);
}

export default App;
