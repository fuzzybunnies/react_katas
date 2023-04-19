import { useState } from "react";

function CityList() {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const cities = ["Indianapolis", "West Lafayette", "Bloomington"];

  const changeClickedStyle = (index) => {
    setClickedIndex(index);
  };

  return (
    <ul>
      {cities.map((city, index) => {
        return (
          <li
            key={index}
            className={`px-2 rounded ${
              clickedIndex === index ? "bg-rose-500 text-stone-100" : ""
            }`}
            onClick={() => changeClickedStyle(index)}
          >
            {city}
          </li>
        );
      })}
    </ul>
  );
}

export default CityList;
