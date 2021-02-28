import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// Here we create the footer of the application

function openTab_insta() {
  window.open('https://www.instagram.com/sungdi');
}

function openTab_facebook() {
  window.open('https://www.facebook.com/SungDiOfficial');
}


function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2 className="footer-item-header-text">Contact</h2>
            <Link to='/mailto' className="footer-item-text">linus@sungdimusic.com</Link>
            <Link to="/geschaeft" className="footer-item-text">+43 699 19414849</Link>
          </div>
          <div class='footer-link-items'>
            <h2 className="footer-item-header-text">About</h2>
            <Link to="/tracks" className="footer-item-text">Tracks</Link>
            <Link to="/social" className="footer-item-text">Social</Link>
            <Link to='/coming' className="footer-item-text">Events</Link>
          </div>
          <div class='footer-link-items'>
            <h2 className="footer-item-header-text">Social Media</h2>
            <Link onClick={openTab_insta} className="footer-item-text">Instagram</Link>
            <Link onClick={openTab_facebook} className="footer-item-text">Facebook</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          
          <Link to="/datenschutz" className="website-rights">
          <p class='website-rights' style={{fontFamily:"contax", fontsize:"25px"}}>Datenschutz und Impressum</p>
          </Link>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
              onClick={openTab_facebook}
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              onClick={openTab_insta}
            >
              <i class='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
