import React, { useState} from 'react'
import NoteForm from './NoteForm'

function Note({notes, removeNote, updateNote}) {
    const [edit, setEdit] = useState({id:null, value: ''})

    const submitUpdate = value => {
      updateNote(edit.id, value)
      setEdit({
        id: null,
        value: ''
      })
    }

    if(edit.id){
      return <NoteForm edit={edit} onSubmit={submitUpdate} />
    }

    return notes.map((note, index) => (
        <div className='note-row' key={index}>
          <div key={note.id} >
            {note.text}
          </div>
          <div className='icons'>
            <button onClick={() => removeNote(note.id)} className='delete-icon'>Delete</button>
            <button onClick={() => setEdit({id: note.id, value: note.text})} className='edit-icon'>Edit</button>
          </div>
        </div>
      ))
}

export default Note
