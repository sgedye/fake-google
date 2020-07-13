import React from 'react';
import Magnify from "../assets/svg/magnify"
import Microphone from '../assets/svg/microphone';

const Main = () => {
  return (
    <section className="main">
      <p>hi therer</p>
      <div style={{ width: "300px", height: "300px" }}>
        <a href="/" className="google-img">
          {" "}
        </a>
      </div>
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