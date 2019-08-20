import React from 'react';

const Hero = (props) => {
    const heroStyle = {
        backgroundImage: 'url(/images/hero1.jpg)',
    }
    return (
        <div className="hero">
            <section className="hero--section" id="app-home">
                    <div className="hero--main-image" style={heroStyle}>
                        bla bla bla
                    </div>                
            </section>
        </div>
    );
}

export default Hero;