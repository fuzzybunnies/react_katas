import { useState } from "react";
import "./App.css";
import KataPage from "./components/KataPage";
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
      <KataPage>
        <KataSection headerText="Daily Spend data">
          <DollarsPerDay></DollarsPerDay>
        </KataSection>
        <KataSection headerText="Csv to Json">
          <CsvToJson></CsvToJson>
        </KataSection>
        <KataSection headerText="A List of Jokes">
          <JokeList></JokeList>
        </KataSection>
        <KataSection headerText="Santa's List" implemented="true">
          <SantasList send={(data) => console.log(data)}></SantasList>
        </KataSection>
        <KataSection headerText=" EggList" implemented="true">
          <EggList eggs={["Cadbury", "Lindt", "Reeses"]}></EggList>
        </KataSection>
        <KataSection headerText="A Counter! Whee!!!" implemented="true">
          <SimpleCounter></SimpleCounter>
        </KataSection>
      </KataPage>
    </div>
  );
}

export default App;
