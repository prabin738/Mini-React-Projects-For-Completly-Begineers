import { useState } from "react";
import BgChange from "./Components/UseState/BgChange/BgChange";
import Counter from "./Components/UseState/Counter/Counter";
import CountIncreaseDecrease from "./Components/UseState/Counter/CountIncreaseDecrease";
import LikeDislikeCount from "./Components/UseState/LikeDislikeCount/LikeDislikeCount";
import Toggle from "./Components/UseState/Toggle/Toggle";
import ToogleVisibility from "./Components/UseState/Toggle/Toggle";
import "./index.css";
import LoginForm from "./Projects/LoginForm/LoginForm";
import Navbar from "./Projects/Navbar/Navbar";
import SideNavbar from "./Projects/SideNavbar/SideNavbar";
import WeatherApp from "./Projects/WeatherApp/WeatherApp";
import ShowTitle from "./Components/UseState/ShowTitle/ShowTitle";
import { ShowHide } from "./Dummy/ShowHide";

const App = () => {
  return (
    <div>
      {/* <Counter />
      <CountIncreaseDecrease /> */}
      {/* <Toggle />
       */}

      {/* <BgChange /> */}
      {/* <LikeDislikeCount /> */}
      {/* <LoginForm /> */}
      {/* <Navbar /> */}
      {/* <SideNavbar /> */}
      {/* <ShowTitle /> */}

      <ShowHide />
    </div>
  );
};

export default App;
