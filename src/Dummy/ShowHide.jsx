import React, { useState } from "react";

export const ShowHide = () => {
  const [show, setShow] = useState(true);

  const togglehide = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={togglehide}>Click Me</button>
      {show ? <h1>Hurray</h1> : "Hello"}
    </div>
  );
};
