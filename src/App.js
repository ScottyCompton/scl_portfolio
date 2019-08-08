import React from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Toolbox from './components/Toolbox';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Toolbox />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
