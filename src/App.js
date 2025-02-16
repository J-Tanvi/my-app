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
