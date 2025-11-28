import React from "react";
import { useState, useEffect } from "react";
const ToggleBtn = () => {
  const [dark, change] = useState(false);
  const modeChange = () => {
    return (
      change(!dark)
    )
  };

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "black" : "white";
    document.body.style.color=dark ? "white" : "black";
  }, [dark]);

  return (
    <div>
      <button  style={{background : dark ? "white" : "black" , borderRadius:"10px" , border:dark? "3px solid blue" : "2px solid blue"}} onClick={modeChange}>
        {dark ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default ToggleBtn;
