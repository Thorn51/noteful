import React from "react";

export default function Note(props) {
  const folder = props.folders.find(
    folder => folder.id === props.match.params.noteId
  );
  return (
    <div className="note_sidebar">
      <button className="back_button">Go Back</button>
      <h2 className="folder_name">{folder}</h2>
    </div>
  );
}
