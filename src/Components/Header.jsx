import React from "react";
import "./Header.css";
import logo from "../Static/Img/logo.png";

const Header = () => {
  return (
    <div className="header_top_div">
      <div className="div_img">
        <img src={logo} className="logo_img" />
      </div>
      <header>
        <div className="nav">
          <ul className="nav_list">
            <li>
              <a href="#">
                <span>Top</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ThreeJS</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Project</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
