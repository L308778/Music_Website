import React from 'react';
import "../tracks.css"
import ReactPlayer from "react-player"
import Footer from "../Footer"
import Particle from "../particle"

export default function Products() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
  <div className = "contain">
  <Particle/>
    <div className="layer">
  <h1 className = "album-header">
    SONGS
  </h1>
  <div className="player">
      <ReactPlayer
        url="https://soundcloud.com/thebrokers/sungdi-burning-out-feat-jinx"
      />
    </div>
    <div className="player">
      <ReactPlayer
        url="https://soundcloud.com/sungdimusic/jezebel-pm"
      />
    </div>
    <div className="player">
      <ReactPlayer
        url="https://soundcloud.com/thebrokers/sungdi-you-know-feat-fuego?in=thebrokers/sets/the-brokers"
      />
    </div>
    <div className="album">
    <h1 className="album-header">ALBUM</h1>
    <div className="player">
      <ReactPlayer
        url="https://soundcloud.com/thebrokers/sets/the-brokers"
      />
    </div>
    </div>
    </div>
  </div>
  </>
  
  )
}
