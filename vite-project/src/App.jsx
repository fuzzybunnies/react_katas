import { useState } from "react";
import "./App.css";
import DollarsPerDay from "./components/spending_reports/DollarsPerDay";
import JokeList from "./components/JokeList";
import SantasList from "./components/SantasList";
import KataSection from "./components/KataSection";
import EggList from "./components/EggList";
import SimpleCounter from "./components/SimpleCounter";
import CsvToJson from "./components/csv_to_json/CsvToJson";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex flex-wrap justify-around p-4 space-y-8">
        <KataSection headerText="Daily Spend data">
          <DollarsPerDay></DollarsPerDay>
        </KataSection>
        <KataSection headerText="Csv to Json">
          <CsvToJson></CsvToJson>
        </KataSection>
        <KataSection headerText="A List of Jokes">
          <JokeList></JokeList>
        </KataSection>
        <KataSection headerText="Santa's List">
          <SantasList send={(data) => console.log(data)}></SantasList>
        </KataSection>
        <KataSection headerText=" EggList">
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
