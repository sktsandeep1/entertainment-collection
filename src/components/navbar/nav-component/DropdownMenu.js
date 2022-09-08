import { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import "./Dropdown.css";
const DropdownMenu = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Popular", "Airing Today", "On Tv", "Top Rated"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <p>{selected}</p>
        <VscTriangleDown className="triangle-down-icon" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
