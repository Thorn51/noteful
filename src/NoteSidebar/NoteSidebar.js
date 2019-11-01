import React from "react";
import "./NoteSidebar.css";
import "../NoteContext";
import NoteContext from "../NoteContext";

export default class NoteSidebar extends React.Component {
  static contextType = NoteContext;
  render() {
    const note = this.context.notes.filter(
      note => note.id === this.props.match.params.noteId
    );
    const folder =
      note.length > 0 ? (
        this.context.folders.filter(folder => folder.id === note[0].folderId)
      ) : (
        <p>Loading</p>
      );

    return (
      <aside className="folder_sidebar">
        <div className="note_sidebar">
          <button
            onClick={() => this.props.history.goBack()}
            className="back_button"
          >
            Go Back
          </button>
          <div className="note_location">
            {note.length > 0 ? (
              <h2 className="folder_name">{folder[0].name}</h2>
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      </aside>
    );
  }
}
