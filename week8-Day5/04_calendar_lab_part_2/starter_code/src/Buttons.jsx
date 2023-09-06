export default function Buttons({ handleButtonClick }) {
  return (
    <div className="buttons">
      <h1>React Calendar</h1>
      <div className="btn-group" role="group" aria-label="Radio options">
        <button
          type="button"
          className="holidayButton"
          onClick={() => handleButtonClick("Yellow")}
        >
          Holiday
        </button>
        <button
          type="button"
          className="workButton"
          onClick={() => handleButtonClick("Blue")}
        >
          Work
        </button>
        <button
          type="button"
          className="errandsButton"
          onClick={() => handleButtonClick("Green")}
        >
          Errands
        </button>
        <button
          type="button"
          className="sickButton"
          onClick={() => handleButtonClick("Red")}
        >
          Sick
        </button>
      </div>
    </div>
  );
}
