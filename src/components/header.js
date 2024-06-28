import React from 'react';
import { FaApple } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";

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
      <button className="start-earning1">start earning now <FaApple /> <BiLogoPlayStore />
      </button>
    </div>
  );
}

export default Header;

