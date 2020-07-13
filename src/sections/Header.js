import React from "react"

const Header = () => {
  return (
    <section className="header">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="mobile-header-links">
        <p className="active">ALL</p>
        <p>IMAGES</p>
      </div>
      <div className="desktop-header-links">
        <div>
          <a href='/'>About</a>
          <a href='/'>Store</a>
        </div>
        <div>
          <a href='/'>Gmail</a>
          <a href='/'>Images</a>
        </div>
      </div>
      <div className="header-signin">
        <a href="/" roll="button" className="box-icon">
          {" "}
        </a>
        <button className="btn">Sign In</button>
      </div>
    </section>
  )
};

export default Header;
