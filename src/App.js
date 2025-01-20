import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element = {<Home/>}></Route>
          <Route path="/contact-us" exact element = {<Contact/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

