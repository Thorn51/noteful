import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Folder.css";
import NoteContext from "../NoteContext";

export default class Folder extends React.Component {
  static contextType = NoteContext;
  render() {
    const folderNotes = this.context.notes.filter(
      note => note.folderId === this.props.match.params.folderId
    );
    const notes = Object.keys(folderNotes).map(key => {
      return (
        <div key={folderNotes[key].id} className="note">
          <Link to={`/note/${folderNotes[key].id}`}>
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
    return (
      <section className="notes_section">
        <div className="folder_notes">{notes}</div>
        <button className="add_note">Add Note</button>
      </section>
    );
  }
}
