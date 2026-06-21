import React from "react";
import { About, Contact, Footer, Hero, Projects, Skills } from "./pages";
import Timeline from "./pages/Timeline";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="bg-[#0b0b0b] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
