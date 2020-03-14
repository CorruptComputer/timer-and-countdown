import React from "react";
import "./App.css";
import Timer from "./Timer";
import Countdown from "./Countdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="left">
            <Timer />
          </div>
          <div className="right">
            <Countdown />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
