import React, { useState } from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    if (!isDarkMode) {

      document.documentElement.style.setProperty('--title-color', 'hsl(var(--hue), var(--sat), 90%)');
      document.documentElement.style.setProperty('--text-color', 'hsl(var(--hue), var(--sat), 85%)');
      document.documentElement.style.setProperty('--body-color', 'hsl(var(--hue), var(--sat), 20%)');
      document.documentElement.style.setProperty('--container-color', 'hsl(var(--hue), var(--sat), 15%)');
    } else {
      document.documentElement.style.setProperty('--title-color', 'hsl(var(--hue), var(--sat), 20%)');
      document.documentElement.style.setProperty('--text-color', 'hsl(var(--hue), var(--sat), 46%)');
      document.documentElement.style.setProperty('--body-color', 'hsl(var(--hue), var(--sat), 98%)');
      document.documentElement.style.setProperty('--container-color', '#fff');
    }
  };

  return (
    <>
      <Header />
      <ThemeToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Contact />
        <Services />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
