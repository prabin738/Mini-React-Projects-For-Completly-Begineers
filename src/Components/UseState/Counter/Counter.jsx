import React, { useEffect } from "react";
import "./Counter.css";
import { useFormState } from "react-dom";
import { useState } from "react";

const Counter = () => {
  //usestate hook for tracking clicks
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p className="para"> You have clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Counter;
