import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import PathConstants from "./routes/pathConstants";
import Home from "./pages/home";
import Diary from "./pages/diary";
import Contact from "./pages/contact-us";


function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      //adding pages to the layout 
      children:[
        //home page
        {
          path: PathConstants.HOME,
          element: <Home />,
        },
        //diary page
        {
          path: PathConstants.DIARY,
          element: <Diary />,
        },
        //contact us page
        {
          path: PathConstants.CONTACTUS,
          element: <Contact />,
        },
      ],
    },
  ])
  return (<RouterProvider router = {router}/>);
}

export default App;
