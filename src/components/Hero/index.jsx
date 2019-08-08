import React from 'react';
import hero1 from './images/hero1.jpg';


function Hero() {
    var heroStyle = {
        backgroundImage: 'url(' + hero1 + ')',
    }
    return (
        <section className="app-hero" id="app-home">
                <div className="home-hero1" style={heroStyle}>
                    bla bla bla
                </div>                
        </section>
    );
}


export default Hero;