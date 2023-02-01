import './App.css';
import Builder from './Builder';
import Home from './Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/builder' element={<Builder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
