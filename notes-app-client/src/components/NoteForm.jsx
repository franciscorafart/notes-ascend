import React, { useState } from 'react'

function NoteForm(props) {

    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
    }


  return (
    <form className='note-form' onClick={handleSubmit}>
    {props.edit ? (
        <>
            <input 
            placeholder='Update'
            value={input}
            onChange={handleChange}
            name='text'
            className='note-input edit'
            />
            <button onClick={handleSubmit} className='note-button edit'>
                Update
            </button>
        </>
    ) : (
        <>
            <input
            placeholder='Take some notes'
            value={input}
            onChange={handleChange}
            name='text'
            className='note-input'
          />
          <button onClick={handleSubmit} className='note-button'>
            Add Task
          </button>
        </>
    )}
    </form>
  )
}

export default NoteForm