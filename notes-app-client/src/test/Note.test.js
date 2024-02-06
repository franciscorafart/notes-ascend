import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import Sidebar from '../sidebar/Sidebar'
import NotesApp from '../NotesApp'

/////////////////////////
//Testing to search for content in component
/////////////////////////
test('renders content', () => {
  const note = {
    id: 'banana',
    title: 'bananana',
    body: 'Testing Component',
    important: true
  }
  const notes =  [note]

  render(<Sidebar notes={notes} />)

  const element = screen.getByText('Testing Component...')
  expect(element).toBeDefined()
})

/////////////////////////
//Testing the substring count in body is working as intended
/////////////////////////
test('renders content substring', () => {
  const note = {
    id: 'banana',
    title: 'bananana',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a porttitor neque viverra fusceo',
    important: true
  }
  const notes =  [note]

  render(<Sidebar notes={notes} />)

  const element = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a porttitor neque viverra fusce...')
  expect(element).toBeDefined()
})

/////////////////////////
// Testing to Debug
/////////////////////////
test('renders content', () => {
  const note = {
    id: 'banana',
    title: 'bananana',
    body: 'Component testing',
    important: true
  }
  const notes =  [note]

  render(<Sidebar notes={notes} />)

  const element = screen.getByText('Component testing...')

  screen.debug(element)

  expect(element).toBeDefined()
})

/////////////////////////
//Clicking Button in test
////////////////////////
test('clicking the button calls event handler once', async () => {
  const note = {
    id: 'banana',
    title: 'bananana',
    body: 'Component testing',
    important: true
  }
  const notes =  [note]

  const onDeleteNote = jest.fn()
  const setActiveNote = jest.fn()


  render(
    <Sidebar notes={notes} setActiveNote={setActiveNote} onDeleteNote={onDeleteNote}/>
  )

  const user = userEvent.setup()
  const deleting = screen.getByText('Delete')
  await user.click(deleting)

  expect(onDeleteNote.mock.calls).toHaveLength(1)
})


test('<Main /> updates state and calls onSubmit', async () => {
  const saveNote = jest.fn()
  const user = userEvent.setup()

  render(<Main activeNote={getActiveNote} onUpdateNote={onUpdateNote} onSave={saveNote}/>)

  const input = screen.getByRole('textbox')
  const sendButton = screen.getByText('save')

  await user.type(input, 'Write your note here...')
  await user.click(sendButton)

  expect(saveNote.mock.calls).toHaveLength(1)
  expect(saveNote.mock.calls[0][0].body).toBe('Write your note here...')
})