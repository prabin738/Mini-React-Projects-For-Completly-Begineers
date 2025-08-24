import React, { useState } from "react";

const DummyOne = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleShow}>Hide/Show</button>

      {show ? <h1> Here's it's working</h1> : null}
    </div>
  );
};

export default DummyOne;
