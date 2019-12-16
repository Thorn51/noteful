import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Folder.css";
import NoteContext from "../NoteContext";
import PropTypes from "prop-types";

export default class Folder extends React.Component {
  static contextType = NoteContext;
  render() {
    const folderNotes = this.context.notes.filter(
      note => note.folderid === parseInt(this.props.match.params.folderId)
    );

    const notes = Object.keys(folderNotes).map(key => {
      return (
        <div key={folderNotes[key].id} className="note">
          <Link to={`/note/${folderNotes[key].id}`}>
            <h2 className="note_name">{folderNotes[key].note_name}</h2>
          </Link>
          <div className="note_modification">
            <p className="mod_date">
              Date modified on {""}
              {moment(folderNotes[key].modified).format("Do MMM YYYY")}
            </p>
            <button
              className="delete_note"
              onClick={() => this.context.deleteNote(folderNotes[key].id)}
            >
              Delete Note
            </button>
          </div>
        </div>
      );
    });
    return (
      <section className="notes_section">
        <div className="folder_notes">{notes}</div>
        <Link to="/add-note">
          <button className="add_note">Add Note</button>
        </Link>
      </section>
    );
  }
}
Folder.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      folderID: PropTypes.string,
      id: PropTypes.string,
      modified: PropTypes.string,
      name: PropTypes.string
    })
  ),
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  )
};
