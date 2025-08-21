import React, { useState } from "react";
import "./CountIncreaseDecrease.css";

const CountIncreaseDecrease = () => {
  const [click, setClick] = useState(0);
  return (
    <div className="first">
      <h2>You have clicked {click} times</h2>
      <div className="button">
        <button
          onClick={() => {
            setClick(click + 1);
          }}
        >
          Click to Increase
        </button>

        <button
          onClick={() => {
            setClick(click - 1);
          }}
        >
          Click to Decrease
        </button>
      </div>
    </div>
  );
};

export default CountIncreaseDecrease;
