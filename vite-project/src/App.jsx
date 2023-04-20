import { useState } from "react";
import "./App.css";
import EggList from "./components/EggList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="max-w-xl mx-auto mt-12">
        <EggList eggs={["Cadbury", "Lindt", "Reeses"]}></EggList>
      </div>
    </div>
  );
}

export default App;
