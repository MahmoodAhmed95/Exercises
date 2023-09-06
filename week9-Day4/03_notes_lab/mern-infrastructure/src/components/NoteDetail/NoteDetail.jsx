import React from "react";
import "./NoteDetail.css"; // You may need to create this CSS file

export default function NoteDetail({ note }) {
  if (!note) {
    return (
      <div className="NoteDetail empty">Select a note to view its details.</div>
    );
  }

  return (
    <div className="NoteDetail">
      <h2>{note.text}</h2>
      <p>Created At: {new Date(note.createdAt).toLocaleString()}</p>
      {/* Add any other details you want to display for the note */}
    </div>
  );
}
