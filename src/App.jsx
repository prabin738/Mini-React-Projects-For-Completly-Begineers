import React from "react";
import "./index.css";
import Counter from "./Components/UseState/Counter";
import ToogleVisibility from "./Components/UseState/ToogleVisibility";
import ReduceCount from "./Components/UseState/ReduceCount";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <ToogleVisibility /> */}
      <ReduceCount />
    </div>
  );
};

export default App;
