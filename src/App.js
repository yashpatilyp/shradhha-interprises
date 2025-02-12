import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
import './css/homeabout.css';
import './css/footer.css';
import './css/f-main.css'
import PageNotFound from './components/PageNotFound';
import FixedIcons from './components/FixedIcons';

function App() {
  return (
    <Router>
      {/* <div className="App mainlayout">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/fabrication" element={<FabricationService />} />
          <Route path="/services/machining" element={<MachineService />} />
          <Route path="/services/laser-cutting" element={<LaserService />} />
          <Route path="/services/powder-coating" element={<PowderCoatingService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/working-sector" element={<WorkingSector />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <FixedIcons/>
        <Footer />
      </div> */}
    </Router>
  );
}

export default App;
