import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {
  faYoutube,
  faFacebook,
  faTiktok,
  faInstagram,
  faSpotify,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const icons = 
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SUNGDI 宋迪
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={faYoutube} size="2x" className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tracks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                TRACKS
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/social'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                S&M
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
