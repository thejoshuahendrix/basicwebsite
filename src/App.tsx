import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './themes';
import { useState } from 'react';
import Hero from './components/layout/Hero';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { AppWrapper } from "./components/AppWrapper";






function App() {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme);
  const changeTheme = () => {
    setTheme(theme === DarkTheme ? LightTheme : DarkTheme);
  };
  return (
    
      
    <ThemeProvider theme={theme}>
      <AppWrapper>
      <Router>
        <Navbar themeChanger={changeTheme} />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
