import React from "react";
import { BiErrorAlt } from "react-icons/bi";
const MoreInfo = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#3d6600",
          padding: "1rem",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <BiErrorAlt
          style={{
            color: "#fff",
            padding: "0 1rem 0 1rem",
            fontSize: "1.5rem",
          }}
        />
        <span style={{ color: "#fff", paddingRight: "1rem", fontSize: "2rem" }}>
          More Info
        </span>
      </button>
    </div>
  );
};

export default MoreInfo;
