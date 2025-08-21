import { useState } from "react";
import "./Toggle.css";
const Toggle = () => {
  //usestate to define true or false
  const [isOn, setIsOn] = useState(false);
  //function to handle toggle switch

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  //conditional statement variable to check on or off
  const checkIsOn = isOn ? "On" : "OFF";
  //variable object to change color
  const toogleBGColor = { backgroundColor: isOn ? "#4caf50" : "pink" };

  return (
    <div className="toggle-switch" style={toogleBGColor} onClick={handleToggle}>
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn} </span>
      </div>
    </div>
  );
};

export default Toggle;
