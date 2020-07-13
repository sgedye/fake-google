import React from 'react';

import Header from "./sections/Header.js"
import Main from "./sections/Main.js"
import Footer from "./sections/Footer.js"

import './assets/scss/base.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
