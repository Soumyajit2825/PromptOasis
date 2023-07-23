import React from 'react';
import Body from './Body';
import Contact from './Contact';
import Footer from './Footer';
import Team from './Team';
const Home = () => {
  return (
    <div className="bg-black min-h-screen h-full w-full p-8">
      <div className="animate-content">
        <Body />
      </div>
      <div className="animate-content">
        <Contact />
      </div>
      <div className="animate-content">
        <Team />
      </div>
      <div className="animate-content">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
