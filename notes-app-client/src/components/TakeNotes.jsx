import React, {useState} from 'react'
import Note from './Note'
import NoteForm from './NoteForm'


export default function TakeNotes() {

  const [notes, setNotes] = useState([])

  const addNote = note => {
    if(!note.text || /^\s*$/.test(note.text)){
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
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return
    }
    setNotes(prev => prev.map(item => item.id === noteId ? newValue : item))
  }

  const completeNote = id => {
    let updateNotes = todos.map(note => {
      if( note.id === id){
        note.isComplete = !note.isComplete
      }
      return note
    })
    setNotes(updateNotes)
  }

  return (
    <div className='noteForm'>
      <NoteForm onSubmit={addNote}/>
      <Note 
      notes={notes} 
      completeNote={completeNote} 
      removeNote={removeNote} 
      updateNote={updateNote}/>
    </div>
  )
}
