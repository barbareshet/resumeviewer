import React from 'react';

import './App.css';

import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Resume/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
