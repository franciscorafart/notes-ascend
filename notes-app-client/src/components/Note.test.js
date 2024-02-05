import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// import Note from './Note'
import Sidebar from '../sidebar/Sidebar'
// import NotesApp from '../NotesApp'

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