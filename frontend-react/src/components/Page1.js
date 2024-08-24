import React from "react";
import './page1.css';

const page1 = () => {
    return(
        <div className="page1">
            <div className="middle-content">
                <div id="dsw">DSW</div>
                <div id="content">
                Department of student welfare
                </div>
                <div className="page1-buttons">
                    <button className="on-going-events">On Going Events</button>
                    <button className="upcoming-events">Up Coming Events</button>
                </div>
            </div>
        </div>
    );
};

export default page1;