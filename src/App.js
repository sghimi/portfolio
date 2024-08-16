import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import ThemeToggleButton from './components/darkmode/ThemeToggleButton';
import Blog from './components/blog/Blog';
import BlogDetail from './components/blog/BlogDetail'; // Import the BlogDetail component
import Birds from './components/birds/Birds';

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
    <Router>
      <Header />
      <ThemeToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className='main'>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Birds />
              <About />
              <Skills />
              <Qualification />
              <Work />
              <Contact />
            </>
          } />
          {/* Blog Page */}
          <Route path="/blog" element={<Blog />} />
          {/* Blog Detail Page */}
          <Route path="/blog/:title" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
      <ScrollUp />
    </Router>
  );
}

export default App;
