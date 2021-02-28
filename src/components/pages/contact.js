import React from 'react';
import { Link } from 'react-router-dom';
import '../contact.css';


function HeroSection() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='hero-container'>

        <h1>Contact</h1>

        <p>linus@sungdimusic.com</p>
        <p>+43 699 19414849</p>
      
    </div>
  );
}

export default HeroSection;