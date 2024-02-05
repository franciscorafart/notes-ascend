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
        title: body.title,
        important: body.important,
    })

    const savedNote = await note.save()

    res.status(201).json(savedNote)
})


notesRouter.post('/update', async (req, res) => {
    const {id, note, important, title } = req.body;

    const n = await Note.findOne({ _id: id });

    n.note = note || n.note;
    n.impotant = important !== undefined ? important : n.important;
    n.title = title || n.title;

    const savedNote = await n.save()

    res.status(201).json(savedNote)
})

notesRouter.delete('/:id', async (req,res) =>{
    const {id} = req.params;

    const n = await Note.findByIdAndDelete(id);

    if(!n){res.status(404).json({message:'no id found'})}

    res.status(204).send()

    console.log ("Delete successful");

})

module.exports = notesRouter