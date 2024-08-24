import React from "react";
import './page3.css';

const page3 = () => {
  return (
    <div className="page3">
      <div className="SWS2">SWS
      </div>
      <div className="page3-content">
        <div className="st-word">
          Student
        </div>
        <div className="nd-word">Welfare</div>
        <div className="rd-word">
          Department
        </div>
      </div>
      <button className="page3-button"> Learn More</button>
      <div className="page3-images">
        <button className="left-arrow-button">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="image1">
          <div className="image1-text">
            <h1>Parivartan-Events</h1>
          </div>
        </div>
        <div className="image2">
          <div className="image2-text">
            <h1>Athletic Meet</h1>
          </div>
        </div>
        <div className="image3">
          <div className="image3-text">
            <h1>Football Tournament</h1>
          </div>
        </div>
        <button className="right-arrow-button">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <div className="image4">
          <div className="image4-text">
            <h1>Expedition 2022</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page3;