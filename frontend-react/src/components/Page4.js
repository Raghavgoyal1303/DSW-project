import React from "react";
import './page4.css';

const page4 = () => {
    return (
        <div className="page4" id="page4" >
            <div className="on-going-events2"><u>On Going Events</u></div>
            <div className="page4-images">
                <button className="page4-left-arrow-button">
                    <i className="fa-solid fa-arrow-left"></i></button>
                <div className="page4-image1"></div>
                <div className="page4-image2"></div>
                <div className="page4-image3"></div>
                <div className="page4-image4"></div>
                <button className="page4-right-arrow-button">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default page4;
