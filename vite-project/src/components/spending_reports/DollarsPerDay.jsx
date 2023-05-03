/*
create a visualization that shows a months worth of spend per day
based upon the data in the data.csv file
*/

import Week from "./Week";
import Day from "./Day";
import Month from "./Month";

export default function DollarsPerDay() {
  return (
    <div className="">
      <Month monthName="April">
        <Week>
          <Day></Day>
          <Day></Day>
          <Day></Day>
          <Day></Day>
        </Week>
      </Month>
    </div>
  );
}
