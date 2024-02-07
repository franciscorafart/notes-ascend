export const noteToBackendNote = (note) => ({
    id: note.id,
    title: note.title,
    note: note.content,
    important: note.important,
})

export const backendNoteToNote = (beNote) => ({
    id: beNote.id,
    title: beNote.title,
    content: beNote.note,
    important: beNote.important,
    lastModified: beNote.updatedAt,
})