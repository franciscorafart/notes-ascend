const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified).sort((a, b) => b.isFavorite ? 1 : -1);

  
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        
        <button onClick={onAddNote}>Add</button>
      </div>
      <h4> Important notes are pinned to the top </h4>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified, isFavorite }, i) => (
          <div key={`${id}${title}`}
            className={`app-sidebar-note ${id === activeNote && "active"} ${isFavorite ? "yes" : ""}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>

            <p>{body && body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
