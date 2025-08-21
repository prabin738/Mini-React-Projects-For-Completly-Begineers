import React, { useState } from "react";
import "./ReduceCount.css";
const ReduceCount = () => {
  //usestate to reduce counter
  const [reduce, setReduce] = useState(0);

  return (
    <div className="reduce">
      <h2>You Clicked {reduce} times</h2>
      <button
        onClick={() => {
          setReduce(reduce - 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default ReduceCount;
