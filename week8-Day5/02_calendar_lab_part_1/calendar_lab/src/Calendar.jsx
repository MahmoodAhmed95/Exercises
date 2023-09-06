export default function Calendar({ days, dates }) {
  return (
    <div className="calendarL">
      {dates.map((d, idx) => (
        <div key={idx}>
          <div className="calendarCard">
            <br />
            <div className="Day">{days[idx % 7].name}</div>
            <br />
            <div className="Date">{d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
