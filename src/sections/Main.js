import React from 'react';
import GoogleLogo from '../assets/images/google-colour.png'
import Magnify from "../assets/svg/magnify"
import Microphone from "../assets/svg/microphone"
import MicrophoneColour from "../assets/svg/microphone-colour"

const Main = () => {
  return (
    <section className="main">
      <img src={GoogleLogo} className="google-img" alt="google logo" />
      <div className="google-search">
        <input type="text" />
        <button className="speak-btn">
          <Microphone />
        </button>
        <button className="search-btn">
          <Magnify />
        </button>
      </div>
      <div className="desktop-search">
        <button className="search-btn">
          <Magnify />
        </button>
        <input type="text" />
        <button className="speak-btn">
          <MicrophoneColour />
        </button>
      </div>
      <div className="desktop-buttons">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </section>
  )
};

export default Main;