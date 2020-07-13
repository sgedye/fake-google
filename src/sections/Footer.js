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
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
