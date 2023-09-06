import ToDoListItem from "./ToDoListItem";
import './ToDoList.css'

export default function ToDoList({ todos }) {
  return (
    <ul className="list-container">
      {todos.map((t, idx) => (
        <ToDoListItem todo={t} key={idx} index={idx} />
      ))}
    </ul>
  );
}