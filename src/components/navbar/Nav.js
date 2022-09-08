import { useState } from "react";
import { FaUser } from "react-icons/fa";
import DropdownMenu from "./nav-component/DropdownMenu";
import "./Nav.css";

// import { FaSearch } from "react-icons/fa";
// import { FaMoon } from "react-icons/fa";
// import { FaSun } from "react-icons/fa";

const Nav = () => {
  const [selected, setSelected] = useState("Browse");

  return (
    <>
      <div className="container navbar">
        <div className="nav-container">
          {/* ------------------------------------------------------------------------ */}
          <div className="nav-logo">
            <img src="/assets/EC-logo.png" alt="" className="nav-1-logo" />
            {/* <div className="nav-items-1  otts-logo">
              <img
                src="/assets/netflix.jpeg"
                alt="netflix"
                className="nav-1-logo"
                href="../contents/netflix/index.js"
              />

              <img
                src="/assets/disney.png"
                alt="disney"
                className="nav-1-logo"
              />

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
            </div> */}

            <DropdownMenu
              selected={selected}
              setSelected={setSelected}
              className="dropDownMenu"
            />

            <div className="nav-items-2">
              <p>Popular</p>
              <p>Airing Today</p>
              <p>On Tv</p>
              <p>Top Rated</p>
            </div>
          </div>
          {/* ------------------------------------------------------------------------ */}

          {/* ------------------------------------------------------------------------ */}

          {/* {options.map((option, index) => {
            return (
              <div key={index} className="nav-item-2">
                <p>{options}</p>
              </div>
            );
          })} */}

          {/* ------------------------------------------------------------------------ */}
          <div className="navSub">
            {/* <div className="searchBar">
              <input type="text" placeholder="Search any you want..." />
              <FaSearch className="magnifyingGlasses" />
            </div> */}
            {/* <div className="lang">
              <p>EN</p>
            </div> */}
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
