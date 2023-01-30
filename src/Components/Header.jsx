import React from "react";
import "./Header.css";
import logo from "../Static/Img/logo.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigator = useNavigate();

  const toTop = () => {
    navigator("/");
  };
  const toContact = () => {
    navigator("/contact");
  };
  const toInfo = () => {
    navigator("/info");
  };
  return (
    <div className="header_top_div">
      <div className="div_img">
        <img src={logo} className="logo_img" onClick={toTop} />
      </div>
      <header>
        <div className="nav">
          <ul className="nav_list">
            <li>
              <a>
                <span onClick={toTop}>Top</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ludobico/Project_Rebecca"
                target="_blank"
              >
                <span>Github</span>
              </a>
            </li>
            <li>
              <a>
                <span onClick={toInfo}>Information</span>
              </a>
            </li>
            <li>
              <a>
                <span onClick={toContact}>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
