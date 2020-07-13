import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="location">Australia</p>
      <div className="mobile-divs">
        <div>
          <p>Settings</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div>
          <p>Advertising</p>
          <p>Business</p>
          <p>About</p>
        </div>
      </div>
      <div className="desktop-divs">
        <div>
          <a href="/">Advertising</a>
          <a href="/">Business</a>
          <a href="/">How Search Works</a>
        </div>
        <div>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Settings</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
