import Buttons from "./Buttons.jsx";
import Calendar from "./Calendar.jsx";
import "./Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export default function App() {
  const [categoryColor, setCategoryColor] = useState("");
  const days = [
    {
      name: "Sunday",
    },
    {
      name: "Monday",
    },
    {
      name: "Tuesday",
    },
    {
      name: "Wednesday",
    },
    {
      name: "Thursday",
    },
    {
      name: "Friday",
    },
    {
      name: "Saturday",
    },
  ];

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({ length: 28 }, (x, i) => i + 1);
  const handleButtonClick = (color) => {
    setCategoryColor(color);
  };
  return (
    <div className="App">
      <Buttons handleButtonClick={handleButtonClick} />
      <Calendar days={days} dates={dates} categoryColor={categoryColor} />
    </div>
  );
}
