import { useEffect, useState } from "react";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import { backendNoteToNote, noteToBackendNote } from './utils'
import { post } from './utils/requests'

function NotesApp() {
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/notes/')
      const result = await response.json()
      const parsedResult = result.map(n => backendNoteToNote(n))
      setNotes(parsedResult)
    }
    catch (err) {
      console.error(err)
    }
  }

  // fetching notes from the back-end on initial load
  useEffect(() => {
    fetchData()
  }, [])

  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: "new",
      title: "Untitled",
      body: "",
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const saveNote = async () => {
    const active = getActiveNote()
    if (active) {
      const url = active.id === 'new' ? '/api/notes/create' : '/api/notes/update';
      const payload = active.id === 'new' ? ({...active, id: undefined}) : active;
      const res = await post(url, noteToBackendNote(payload));
      if (res.ok) {
        await fetchData()
      }
    }
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} onSave={saveNote} />
    </div>
  );
}

export default NotesApp;
