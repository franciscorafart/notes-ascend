const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const hasUnsavedNote = Boolean(notes.find(n => n.id === 'new'))
  const newNotes = notes.filter(n => n.id === 'new')
  const pinned = notes.filter(n => n.important).sort((a, b) => new Date(a.lastModified) > new Date(b.lastModified) ? -1 : 1)
  const unpinned = notes.filter(n => !n.important && n.id !== "new").sort((a, b) => new Date(a.lastModified) > new Date(b.lastModified) ? -1 : 1)
  const sortedNotes = [...newNotes, ...pinned, ...unpinned];

  
  return (
    <div className="app-sidebar">
      
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button className={`${hasUnsavedNote ? "disabled" : ''}`} onClick={onAddNote} disabled={hasUnsavedNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, content, lastModified, important }) => (
          <div key={`${id}`}
            className={`app-sidebar-note ${id === activeNote && "active"} ${important ? 'pinned' : ''}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>

            <p>{content && content.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
            <small className="pad-top">{important ? "Pinned" : " "}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
