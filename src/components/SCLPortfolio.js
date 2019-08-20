import React from 'react';
import Footer from './Footer';
import About from './About';
import Header from './Header';
import Hero from './Hero';
import Toolbox from './Toolbox';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default class SCLPortfolio extends React.Component {
  render() {
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
}

