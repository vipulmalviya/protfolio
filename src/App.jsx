import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import Home from "./Components/HomePage/Home.jsx"
import About from "./Components/AboutPage/About.jsx"
import Footer from './Components/footer/Footer.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Project from "./Components/projectPage/Project.jsx"
import LocomotiveScroll from 'locomotive-scroll';
import Error from './Error/Error.jsx';
const App = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/About') {
      const locomotiveScroll = new LocomotiveScroll();
      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, [location]);
  return (
    <>
      <NavBar />
      <AnimatePresence mode='wait' >
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;