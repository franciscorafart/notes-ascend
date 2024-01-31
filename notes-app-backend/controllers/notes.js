const notesRouter = require('express').Router()
const Note = require('../models/notesModel')

notesRouter.get('/', async (req, res) => {
    const notes = await Note.find({})
    res.json(notes)
})

notesRouter.post('/create', async (req, res) => {
    const body = req.body

    const note = new Note({
        note: body.note,
        important: body.important,
    })

    const savedNote = await note.save()

    res.status(201).json(savedNote)
})

module.exports = notesRouter