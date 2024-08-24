import React from "react";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import './App.css';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
}

export default App;