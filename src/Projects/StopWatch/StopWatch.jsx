import { useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  //timer usestate to track and initilize time
  const [timer, setTimer] = useState(0);
  const startTimer = () => {
    window.mytimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };

  return (
    <div className="stopwatch-container">
      <h1>Timer</h1>
      <span> {Math.trunc(timer / 60)} Mins </span>
      <span>{timer % 60} Secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
