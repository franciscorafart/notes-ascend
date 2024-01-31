const mongoose = require('mongoose')

const noteModel = mongoose.Schema({
    note: {
        type: String,
        required: [true, 'please add a note']
    },
    important: Boolean,
}, {
    timestamps: true,
})

noteModel.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Note', noteModel)