import React from "react";
import { FaPlay } from "react-icons/fa";

const Play = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <FaPlay style={{ padding: "0 1rem 0 1rem", fontSize: "1.5rem" }} />
        <span style={{ paddingRight: "1rem", fontSize: "2rem" }}>Play</span>
      </button>
    </div>
  );
};

export default Play;
