import React from 'react';
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Projects from "./Components/Projects"
import Develop4Good from "./Components/Develop4Good"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
