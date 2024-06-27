import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.jpg" alt="S Logo" className="s-logo" />
        <div className="text-container">
          <span className="solo">Solo.</span>
          <span className="by">by WLDD</span>
        </div>
      </div>
      <button className="start-earning1">start earning now <img src="apple-fill (1).png" alt="apple-icon" />
      </button>
    </div>
  );
}

export default Header;

