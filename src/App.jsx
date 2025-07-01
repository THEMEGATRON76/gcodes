import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import router from "./router"
import { RouterProvider } from "react-router";
import './mobile.css'
//import './gradient.css'

function App() {
  return (
      // <div id="data">
      //   <div className="hero-section">
      //   <NavigationBar />
      //   </div>
      // <div className="content-section">
      //   <Home />
      // </div>
        
      // </div>
      <div>
        <div id="holder">
            <RouterProvider router={router} />
        </div>
      </div>
  );
}

export default App;
