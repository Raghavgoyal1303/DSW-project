import React from "react";
import './page5.css';

const page5 = () =>{
    return(
        <div className="page5" id="page5">
            <div className="up-coming-events2"><u>Up Going Events</u></div>
            <div className="page5-images">
                <button className="page5-left-arrow-button">
                    <i className="fa-solid fa-arrow-left"></i></button>
                <div className="page5-image1"></div>
                <div className="page5-image2"></div>
                <div className="page5-image3"></div>
                <div className="page5-image4"></div>
                <button className="page5-right-arrow-button">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="copyright">
                <div className="createdby">
                    Created By
                </div>
                <div className="name">
                    <u>Raghav Goyal</u>
                </div>
            </div>
        </div>
    );
}

export default page5;