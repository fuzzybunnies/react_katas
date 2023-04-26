import { useState } from "react";
import "./App.css";
import KataSection from "./components/KataSection";
import EggList from "./components/EggList";
import SimpleCounter from "./components/SimpleCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex justify-around p-12">
        <KataSection headerText="EggList">
          <EggList eggs={["Cadbury", "Lindt", "Reeses"]}></EggList>
        </KataSection>
        <KataSection headerText="A Counter! Whee!!!">
          <SimpleCounter></SimpleCounter>
        </KataSection>
      </div>
    </div>
  );
}

export default App;
