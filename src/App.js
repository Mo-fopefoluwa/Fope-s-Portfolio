import React from 'react';
import Header from './Components/Header/Header';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/portfolio';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='bg-[#dddddd] dark:bg-[black]'>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;


