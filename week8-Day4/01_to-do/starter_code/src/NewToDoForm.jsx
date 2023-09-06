import { useState } from "react";
export default function NewToDoForm(addTodo) {
  const [newTodo, setNewTodo] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    emotion: "😁",
  });
  // Add this new handler
  function handleAddTodo(evt) {
    evt.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }
  function handleChange(evt) {
    // Replace with new object and use a computed property
    // to update the correct property
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }
  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddTodo}>
        <label>NAME</label>
        <input name="name" onChange={handleChange} />
        <label>EMOTION</label>
        <select name="emotion" onChange={handleChange}>
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
        <input
          value={newTodo}
          onChange={(evt) => setNewTodo(evt.target.value)}
          placeholder="To-Do"
          required
          pattern=".{4,}"
        />
        <button type="submit">ADD TO-DO</button>
      </form>
      <h1>
        {formData.name} is {formData.emotion}
      </h1>
    </>
  );
}
