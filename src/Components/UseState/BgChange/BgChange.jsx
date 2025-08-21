import React, { useState } from "react";

const BgChange = () => {
  //array to store value
  const colors = ["Red", "Yellow", "Blue", "Green"];

  //usestate hooks to define background color and initial color
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          color: bgColor === "white" ? "black" : "white",
        }}
      >
        Pick Your Color!
      </h1>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "40px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0, 0.1)",
        }}
      >
        {/* map function to export color */}
        {colors.map((colors) => (
          <button
            style={{
              padding: "12px 24px",
              margin: "10px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "8px",
              border: "none",
              backgroundColor: colors,
              fontWeight: "bold",
              color: ["Yellow"].includes(colors) ? "black" : "white",
            }}
            onClick={() => {
              setBgColor(colors);
            }}
          >
            {colors}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BgChange;
