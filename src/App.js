import React from 'react';
import Header from './Components/Header/Header';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';


function App() {
  return (
    <div className='bg-[#eadacd] dark:bg-[black]'>
       <Header />
       <Hero />
       <About />
    </div>
  );
}

export default App;


