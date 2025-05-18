import React from 'react';

import LogoCaue from './assets/LogoCaue.png';
import FlavourImg from './assets/Flavour.png';
import FarmiconImg from './assets/Farmicon.png';
import './styles.css';


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Home logo={LogoCaue} />
      <About logo={LogoCaue} />
      <Projects flavourImg={FlavourImg} farmiconImg={FarmiconImg} />
      <Contact />
    </>
  );
}

export default App;