import React from "react";
import "./index.css";
import Counter from "./Components/UseState/Counter";
import ToogleVisibility from "./Components/UseState/ToogleVisibility";
import ReduceCount from "./Components/UseState/ReduceCount";
import CountIncreaseDecrease from "./Components/UseState/CountIncreaseDecrease";

const App = () => {
  return (
    <div>
      {/* <Counter />
      <ReduceCount /> */}

      <CountIncreaseDecrease />
    </div>
  );
};

export default App;
