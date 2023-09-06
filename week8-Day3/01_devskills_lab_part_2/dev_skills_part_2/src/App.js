// import logo from "./logo.svg";
import "./App.css";
import SkillList from "./skillList";
// import SkillListItem from "./skillListItem";
import SkillListForm from "./skillListForm";

function App() {
  // const misc = ["sillicon", 22, true, <div>Hey</div>];
  // return <div className="App">{misc}</div>;
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <SkillListForm />
    </div>
  );
}

export default App;
