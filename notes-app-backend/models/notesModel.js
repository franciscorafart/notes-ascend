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

module.exports = mongoose.model('Note', noteModel)