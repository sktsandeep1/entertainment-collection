import React from "react";
import "./Nav.css";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="Container navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/EC-logo.png" alt="" className="nav-1-logo" />
          </div>
          <div className="nav-items-1  otts-logo">
            <img
              src="/assets/netflix.jpeg"
              alt="netflix"
              className="nav-1-logo"
            />
            <img src="/assets/disney.png" alt="disney" className="nav-1-logo" />
            <img src="/assets/hbo.png" alt="hbo" className="nav-1-logo" />
            <img
              src="/assets/prime-video.png"
              alt="prime"
              className="nav-1-logo"
            />
            <img
              src="/assets/discovery.png"
              alt="discovery"
              className="nav-1-logo"
            />
          </div>

          <div className="nav-items-2">
            <p class="nav-link">Popular</p>
            <p class="nav-link">Airing Today</p>
            <p class="nav-link">On Tv</p>
            <p class="nav-link">Top Rated</p>
          </div>

          <div className="navSub">
            <div className="searchBar">
              <input type="text" placeholder="Search any you want..." />
              <FaSearch className="magnifyingGlasses" />
            </div>
            <div className="lang">
              <p>EN</p>
            </div>
            {/* <div className="theme-mode">
              <FaMoon className="faMoon" />
              <FaSun className="faSun" />
            </div> */}
            <div className="account">
              <FaUser className="faUser" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
