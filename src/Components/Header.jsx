import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_top_div">
      <header>
        <div class="nav">
          <ul class="nav_list">
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About me</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>3D Background</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Projects</span>
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
