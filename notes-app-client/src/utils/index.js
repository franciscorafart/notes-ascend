export const noteToBackendNote = (note) => ({
    id: note.id,
    title: note.title,
    note: note.body,
    important: note.isFavorite,
})

export const backendNoteToNote = (beNote) => ({
    id: beNote.id,
    title: beNote.title,
    body: beNote.note,
    isFavorite: beNote.important,
    lastModified: beNote.updatedAt,
})