import React, { useEffect, useState } from 'react'
import Note from './Note'
import NoteForm from './NoteForm'


export default function TakeNotes() { 

  const [notes, setNotes] = useState([])

  // fetching notes from the back-end
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch('/api/notes/')
      const result = await response.json()
      setNotes(result)
      console.log('this is the notes from the backend', result)
    }
    catch (err) {
      console.error(err)
    }
  }
  fetchData()
  }, [])


  const addNote = note => {
    if (!note.text || /^\s*$/.test(note.text)) {
      return
    }

    const newNotes = [note, ...notes]

    setNotes(newNotes)
  }

  const removeNote = id => {
    const removeArr = [...notes].filter(note => note.id !== id)
    setNotes(removeArr)
  }

  const updateNote = (noteId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setNotes(prev => prev.map(item => item.id === noteId ? newValue : item))
  }

  const favoriteNote = id => {
    let updateNote = notes.map(note => {
      if (note.id === id) {
        note.isFavorite = !note.isFavorite
      }
      return note
    })
    setNotes(updateNote)
  }



  return (
    <div className='noteForm'>
      <NoteForm onSubmit={addNote} />
      <Note
        notes={notes}
        removeNote={removeNote}
        updateNote={updateNote}
        favoriteNote={favoriteNote}
      />
    </div>
  )
}
