import React, { useState } from "react";
import "./ToogleVisibility.css";

const ToogleVisibility = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="toggle">
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default ToogleVisibility;
