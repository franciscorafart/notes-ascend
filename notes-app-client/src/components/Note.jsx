import React from 'react'

function Note({notes, completeNote, removeNote, updateNote}) {
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
        <div className={note.isComplete ? 'note-row complete' : 'note-row'} key={index}>
          <div key={todo.id} onClick={() => completeNote(note.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <button onClick={() => removeNote(note.id)} className='delete-icon'/>
            <button onClick={() => setEdit({id: note.id, value: note.text})} className='edit-icon'/>
          </div>
        </div>
      ))
}

export default Note