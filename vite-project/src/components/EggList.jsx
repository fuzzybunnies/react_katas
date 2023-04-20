/*
    The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
    Loop through the props.eggs to output a unorder list of Easter eggs.
    Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
    Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.

    <EggList eggs={["Cadbury", "Lindt", "Reeses"]}></EggList>
*/

import EasterEgg from "./EasterEgg.jsx";

function EggList({ eggs }) {
  return (
    <ul>
      {eggs.map((eggName, index) => (
        <EasterEgg name={eggName} key={index}></EasterEgg>
      ))}
    </ul>
  );
}

export default EggList;
