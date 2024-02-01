import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import Home from "./Components/HomePage/Home.jsx"
import About from "./Components/AboutPage/About.jsx"
import Footer from './Components/footer/Footer.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Project from "./Components/projectPage/Project.jsx"
const App = () => {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode='wait' >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;