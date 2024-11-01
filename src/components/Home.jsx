import React from "react";

function Home() {
  return (
    <section className="hero-section" data-aos="fade" data-aos-duration="3000">
      <div className="hero-title">
        <h3 className="hello-text">Hello World!</h3>
        <h2 className="intro-text1">
          I'm <span>Sujal Bhatnagar</span>
        </h2>
        <h2 className="intro-text2">a front-end developer</h2>
        <h2 className="info-text">
          With a passion for building beautiful and functional websites.
        </h2>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
