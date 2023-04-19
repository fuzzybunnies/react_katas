import React from "react";
import "./App.css";
import CityList from "./components/CityList";

function App() {
  return (
    <div className="App">
      <header className="max-w-sm mx-auto">
        <CityList></CityList>
      </header>
    </div>
  );
}

export default App;
