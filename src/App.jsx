import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills'; 
import Project from './sections/Project'; 
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import OverlayMenu from './components/OverlayMenu';
import IntroAnimation from './components/IntroAnimation';
import React from 'react';


export default function App() {
  const [introDone,setIntroDone]=React.useState(false);

  return (
    <>
    {!introDone && <IntroAnimation onFinish={()=>setIntroDone(true)} />}
    
    {introDone &&(
    
    <div className="relative gradient text-white">
      <CustomCursor />
      {/* <ParticlesBackground /> */}
      <OverlayMenu />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
    )}
    </>
  )
}
