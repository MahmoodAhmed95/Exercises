import "./NewSkillForm.css";
import { useState } from "react";

export default function NewSkillForm({ addSkill }) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill({ name, level: parseInt(level) });
    setName("");
    setLevel("");
  };
  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label>Skill</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Level</label>
      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>ADD SKILL</button>
    </form>
  );
}
