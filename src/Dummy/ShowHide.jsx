import React, { useState } from "react";

export const ShowHide = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleShow}>Show/Hide</button>
      {show ? <h1>Welcome to the React</h1> : null}
    </div>
  );
};
