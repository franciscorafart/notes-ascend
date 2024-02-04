const notesRouter = require('express').Router()
const Note = require('../models/notesModel')

notesRouter.get('/', async (req, res) => {
    const notes = await Note.find({})
    res.json(notes)
})

notesRouter.post('/create', async (req, res) => {
    const body = req.body

    const note = new Note({
        title: body.title,
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
    n.title = title || n.title;
    n.important = important !== undefined ? important : n.important;

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

notesRouter.put('/important', async (req, res) => {
    const { id, important }  = req.body


    console.log("important",important)

    try{
        const importantUpdate = await Note.findOneAndUpdate(
        { _id: id },
        { $set: { important : important }},
        //check this out in mongo doc
        )
        
        res.status(200).json(importantUpdate)

    } catch (err) {
        console.log(err)
    }
    
})

module.exports = notesRouter