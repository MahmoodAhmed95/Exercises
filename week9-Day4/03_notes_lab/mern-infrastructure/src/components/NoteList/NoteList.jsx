import React from "react";
import "./NoteList.css"; // You may need to create this CSS file

export default function NoteList({ notes, activeNote, setActiveNote }) {
  return (
    <div className="NoteList">
      {notes.map((note) => (
        <div
          key={note._id}
          className={`NoteList__note ${note === activeNote ? "active" : ""}`}
          onClick={() => setActiveNote(note)}
        >
          <h3>{note.text}</h3>
          <p>Created At: {new Date(note.createdAt).toLocaleString()}</p>
          {/* Add any other summary information you want to display for the note */}
        </div>
      ))}
    </div>
  );
}
