import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Settings from "./pages/Settings.js";
import Recipes from "./pages/Recipes.js";
function App() {
  return (
    <Router>
        
      <Navbar/>
      <div className="container main">
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
      <Footer/>
      

    
    </Router>
  
  );
}

export default App;
