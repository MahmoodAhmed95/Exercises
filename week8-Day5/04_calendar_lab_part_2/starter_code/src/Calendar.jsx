import React from "react";
import "./Calendar.css";
export default function Calendar({ days, dates, categoryColor }) {
  // const [selectedDay, setSelectedDay] = useState("");

  const handleDateClick = (idx) => {
    // setSelectedDay(idx, true);
    console.log(`idx ${idx} clicked`);
    document.getElementById(`date-${idx}`).style.backgroundColor =
      categoryColor;
  };

  return (
    <div className="Calendar">
      <div className="CalendarGrid">
        {dates.map((d, idx) => (
          <div
            key={idx}
            className="CalendarCell"
            id={`date-${idx}`}
            onClick={() => handleDateClick(idx)}
          >
            <div className={`calendarCard`}>
              <br />
              <div className="DayName">{days[idx % 7].name}</div>
              <br />
              <div className="DateNumber">{d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
