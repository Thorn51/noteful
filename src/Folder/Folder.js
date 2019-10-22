import React from "react";

export default function Folder(props) {
  const folderNotes = props.notes.filter(
    note => note.folderId === props.match.params.folderId
  );
  const notes = Object.keys(folderNotes).map(key => {
    return (
      <div key={folderNotes[key].id} className="note">
        <h2>{folderNotes[key].name}</h2>
      </div>
    );
  });
  return <div className="folder_notes">{notes}</div>;
}
