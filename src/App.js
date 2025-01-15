import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FabricationService from './pages/FabricationService';
import MachineService from './pages/MachineService';
import LaserService from './pages/LaserService';
import PowderCoatingService from './pages/PowderCoatingService';
import Contact from './pages/Contact';
import WorkingSector from './pages/WorkingSector';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './css/navbar.css';
import './css/homeabout.css'
import './css/footer.css'
function App() {
  return (
    <Router>
      <div className="App mainlayout">
        <Header />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fabrication-service" element={<FabricationService />} />
            <Route path="/machine-service" element={<MachineService />} />
            <Route path="/laser-service" element={<LaserService />} />
            <Route path="/powder-coating-service" element={<PowderCoatingService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/working-sector" element={<WorkingSector />} />
          </Routes>
        </div>
        <Footer />

    </Router>
  );
}

export default App;
