import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import Sidebar from '../sidebar/Sidebar'

/////////////////////////
//Testing to search for content in component
/////////////////////////
test('renders content', () => {
  const note = {
    id: 'banana',
    title: 'bananana',
    content: 'Testing Component',
    important: true
  }
  const notes =  [note]

  render(<Sidebar notes={notes} />)

  const element = screen.getByText('Testing Component...')
  expect(element).toBeDefined()
})

/////////////////////////
//Testing the substring count in content is working as intended
/////////////////////////
test('renders content substring', () => {
  const note = {
    id: 'banana',
    title: 'bananana',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a porttitor neque viverra fusceo',
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
    content: 'Component testing',
    important: true
  }
  const notes =  [note]

  render(<Sidebar notes={notes} />)

  const element = screen.getByText('Component testing...')

  // screen.debug(element)

  expect(element).toBeDefined()
})

/////////////////////////
//Clicking Button in test
////////////////////////
test('clicking the button calls event handler once', async () => {
  const note = {
    id: 'banana',
    title: 'bananana',
    content: 'Component testing',
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