import React from 'react';
import Footer from "../Footer"
import "../social.css"
import {
  faYoutube,
  faFacebook,
  faTiktok,
  faInstagram,
  faSpotify,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignUp() {
  return (
    <>
  <div className = "cont">
  <h1 className='signup'>LIKE & SUBSCRIBE</h1>
  <div class="social-container">
      <a href="https://www.youtube.com/channel/UCjppnBzA0T-0dIhLUcYrncg"
        className="youtube_social">
        <FontAwesomeIcon icon={faYoutube} size="6x" />
      </a>
<a href="https://www.facebook.com/SungDiOfficial"
  className="facebook_social">
  <FontAwesomeIcon icon={faFacebook} size="6x" />
</a>
<a href='https://www.instagram.com/sungdi'
  className="instagram_social">
  <FontAwesomeIcon icon={faInstagram} size="6x" />
</a>
<a href="https://vm.tiktok.com/ZMeddyUJ9/"
  className="tiktok_social">
  <FontAwesomeIcon icon={faTiktok} size="6x" />
</a>
<a href="https://soundcloud.com/sungdimusic"
  className="soundcloud_social">
  <FontAwesomeIcon icon={faSoundcloud} size="6x" />
</a>
<a href="https://open.spotify.com/artist/0grKcBOpj8vSPkJ4HZyU1h?si=qZ4wi7GCTsywrLs-V0xtGA"
  className="spotify_social">
  <FontAwesomeIcon icon={faSpotify} size="6x" />
</a>
</div>
    </div>

    <Footer/>
    </>
    )
}