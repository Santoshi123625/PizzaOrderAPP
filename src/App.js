import './App.css';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"; // Corrected import path
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar /> {/* Render Navbar only once inside the Router */}
          <Routes>
            <Route path="/react-web-project" exact element={<Home/>}/>
            <Route path="/menu" exact element={<Menu/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
          </Routes>
          <Footer n/>
        </Router> 
    </div>
  );
}

export default App;
