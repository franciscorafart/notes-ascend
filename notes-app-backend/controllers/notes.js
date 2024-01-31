const notesRouter = require('express').router()
const Note = require('../models/notesModel')

notesRouter.get('/', async (req, res) => {
    const notes = await Note.find({})
    response.json(notes)
})

notesRouter.post('/', async (req, res) => {
    const body = request.body

    const note = new Note({
        note: body.note,
        important: body.important,
    })

    const savedNote = await note.save()

    response.status(201).json(savedNote)
})