import React from "react";
import "./App.css";
import { useState } from "react";
//
import ColorChange from "./components/ColorChange";

function App() {
  const [color, setColor] = useState("");
  //console.log(color, setColor);

  return (
    <div className={`react-root ${color}`}>
      <div className="centered">
        <h1>Color Picker</h1>
        {/* <button className="red" onClick={() => setColor("red")}>
          RED
        </button>
        <button className="green" onClick={() => setColor("green")}>
          GREEN
        </button>
        <button className="blue" onClick={() => setColor("blue")}>
          BLUE
        </button> */}
        <ColorChange color="red" setColor={setColor} />
        <ColorChange color="green" setColor={setColor} />
        <ColorChange color="blue" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
