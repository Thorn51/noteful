import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Folder.css";

export default function Folder(props) {
  const folderNotes = props.notes.filter(
    note => note.folderId === props.match.params.folderId
  );
  const notes = Object.keys(folderNotes).map(key => {
    return (
      <div key={folderNotes[key].id} className="note">
        <Link to={`file/${folderNotes[key].id}`}>
          <h2 className="note_name">{folderNotes[key].name}</h2>
        </Link>
        <div className="note_modification">
          <p className="mod_date">
            Date modified on {""}
            {moment(folderNotes[key].modified).format("Do MMM YYYY")}
          </p>
          <button className="delete_note">Delete Note</button>
        </div>
      </div>
    );
  });
  return <div className="folder_notes">{notes}</div>;
}
