import React, { useState } from "react";

const ShowTitle = () => {
  //usestate to show or hide title
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((show) => !show)}>Show/Hide</button>
      {show ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
};

export default ShowTitle;
