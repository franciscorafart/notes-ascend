import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote, importantNote, onSave }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="content"
          placeholder="Write your note here..."
          value={activeNote.content}
          onChange={(e) => onEditField("content", e.target.value)}
        />
        <button className="save-button" onClick={onSave}>Save</button>

        <button className={ activeNote.important === false ? "save-button" : "save-button important"} onClick={() => importantNote(activeNote)}>Important</button>
      
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
