const notesRouter = require('express').router()
const Note = require('../models/notesModel')

notesRouter.get('/', async (req, res)=> {
    const notes = await Note.find({})
    response.json(notes)
})