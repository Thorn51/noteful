import React from "react";
import moment from "moment";
import "./NoteMain.css";
import NoteContext from "../NoteContext";

export default class NoteMain extends React.Component {
  static contextType = NoteContext;
  render() {
    const notes = this.context.notes;

    const note =
      notes.length === 0
        ? "Loading Note"
        : notes.filter(
            note => note.id === parseInt(this.props.match.params.noteId)
          );

    return (
      <React.Fragment>
        {notes.length === 0 ? (
          <p>Loading Notes...</p>
        ) : (
          <section className="notes_section">
            <div className="note">
              <h2 className="note_name">{note[0].note_name}</h2>
              <div className="note_modification">
                <p className="mod_date">
                  Date modified on {""}{" "}
                  {moment(note.modified).format("Do MMM YYY")}
                </p>
                <button
                  className="delete_note"
                  onClick={() => this.context.deleteNote()}
                >
                  Delete Note
                </button>
              </div>
            </div>
            <div>
              <p className="note_content">{note[0].note_text}</p>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}
