import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="texter bg-[#121212] ">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
