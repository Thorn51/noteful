import React from "react";
import "./NoteSidebar.css";

export default function Note(props) {
  const note = props.notes.filter(
    note => note.id === props.match.params.noteId
  );
  console.log(props.history);
  const folder = props.folders.filter(folder => folder.id === note[0].folderId);
  return (
    <aside className="folder_sidebar">
      <div className="note_sidebar">
        <button className="back_button">Go Back</button>
        <div className="note_location">
          <h2 className="folder_name">{folder[0].name}</h2>
        </div>
      </div>
    </aside>
  );
}
