import React from 'react';
import Header from './Components/Header/Header';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/portfolio';


function App() {
  return (
    <div className='bg-[#dddddd] dark:bg-[black]'>
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;


