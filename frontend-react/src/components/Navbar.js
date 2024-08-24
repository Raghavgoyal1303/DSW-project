import React from 'react';
import './Navbar.css';

const Navbar =  () => {
    return(
        <div className='navbar'>
        <img src="images/cgc-logo2.jpeg" height="50px" width="150px" alt="Logo" style={{ marginBottom: '1rem' }} />
            <div className="Right-Parts">
            <div className="Home">Home</div>
            <div className="About-us">About-Us</div>
            <div className="student-services">Student Services</div>
            <div className="contact-us">Contact-Us</div>
            <div className="our-placements">Our-Placement</div>
        <button className="get-started"> Get Started </button>
      </div>
        </div>
    );
};

export default Navbar;