import React, { useState, useEffect } from "react";
import "./NoteHistoryPage.css";
import * as notesAPI from "../../utilities/notes-api";
import NoteDetail from "../../components/NoteDetail/NoteDetail"; // You may need to create this component
import NoteList from "../../components/NoteList/NoteList"; // You may need to create this component

export default function NoteHistoryPage({ user, setUser }) {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    async function getNotes() {
      const notes = await notesAPI.getAllNotesForUser(); // Update the API call
      setActiveNote(notes[0] || null);
      setNotes(notes);
    }
    getNotes();
  }, []);

  return (
    <main className="NoteHistoryPage">
      {/* Render a NoteList component */}
      <NoteList
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      {/* Render the existing NoteDetail component */}
      <NoteDetail note={activeNote} />
    </main>
  );
}
