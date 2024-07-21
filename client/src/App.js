import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";




function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <div 
          
          className=" bg-custom-dark min-h-screen overflow-x-hidden">
          <HeroSection />
          <div className="bg-custom-gradient w-full">
            <Skills />
            <Experience />
          </div>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <div className="bg-custom-gradient w-full">
            <Education />
            <Contact />
          </div>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
