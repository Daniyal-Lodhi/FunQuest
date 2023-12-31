import './App.css'
import './index.css'
import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Mahamscreen1 from './components/Mahamscreen1';
import Mahamscreen2 from './components/Mahamscreen2';
function App() {

  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/game' Component={Game} />
      <Route path='/mahams1' Component={Mahamscreen1} />
      <Route path='/mahams2' Component={Mahamscreen2} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
