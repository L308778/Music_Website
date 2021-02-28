import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bio-container'>
      <h2 className = "bio-header">Linus Sung-Di Bleinroth</h2>
      <h2 className="bio-quote">
      “There are two means of refuge from the miseries of life: music and cats.” ― Albert Schweitzer
      </h2>
      <div>
      </div>
      <div className='hero-btns'>
      <Link to="/tracks" style={{ textDecoration: 'none', color:"white" }}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Tracks
        </Button>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color:"white" }}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact
        </Button>
        </Link>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Press-kit
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;