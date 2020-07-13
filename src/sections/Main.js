import React from 'react';
import GoogleLogo from '../assets/images/google-colour.png'
import Magnify from "../assets/svg/magnify"
import Microphone from '../assets/svg/microphone';

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
    </section>
  )
};

export default Main;