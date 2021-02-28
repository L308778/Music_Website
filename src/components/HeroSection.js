import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import { GreatThings, BeautifulQuestions, SignalNoise, Thursday, ReadySetGo, SunnyMorning } from 'moving-letters'


import Particle from "./particle.js"


function HeroSection() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='hero-container'>
      <video src='/Videos/video.mp4' autoPlay loop muted />
      <h1 className = "hero-header" style={{fontSize:130, color:"#94302b"}}>SUNGDI</h1>
    </div>
  );
}

export default HeroSection;
