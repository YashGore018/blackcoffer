import React from 'react';
import '../style/Header.css'; // Assuming you have a CSS file for styles 

const Header = () => {
  return (
    <div className="frame-16">
      <div className="group-1">
        <div className="frame-29">
          <h1 className="title">The Spice Villa!</h1>
          <p className="table-id">Table ID : #34</p>
        </div>
      </div>
      <div className="frame-26">
        <div className="bell-icon">&#128276;</div>
        <div className="frame-15">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;