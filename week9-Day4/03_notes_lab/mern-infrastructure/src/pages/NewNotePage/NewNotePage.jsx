import React, { useState } from "react";
import { create } from "../../utilities/notes-api";

export default function NewNotePage({ user }) {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an API request to your backend server to create a new note
      const newNote = await create({ text: noteText, user });

      if (!newNote) {
        throw new Error("Failed to create note");
      }
      console.log("New note created:", newNote);
      setNoteText("");
    } catch (error) {
      console.error("Error creating note:", error.message);
    }
  };

  return (
    <div>
      <h1>New Note Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="noteText">Note Text:</label>
          <textarea
            id="noteText"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
}
