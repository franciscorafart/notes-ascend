import React, { useState } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";

export default function TakeNotes() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }

    const newNotes = [note, ...notes];

    setNotes(newNotes);
  };

  const removeNote = async (id) => {
    const deleteResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );
    setStatus("Delete successful");

    const removeArr = [...notes].filter((note) => note.id !== id);
    setNotes(removeArr);
  };

  const updateNote = (noteId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? newValue : item))
    );
  };

  return (
    <div className="noteForm">
      <NoteForm onSubmit={addNote} />
      <Note notes={notes} removeNote={removeNote} updateNote={updateNote} />
    </div>
  );
}
