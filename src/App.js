import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element = {<Home/>}></Route>
          <Route path="/about" exact element = {<About/>}></Route>
          <Route path="/services" exact element = {<Services/>}></Route>
          <Route path="/contact" exact element = {<Contact/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

