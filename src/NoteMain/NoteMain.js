import React from "react";
import moment from "moment";
import "./NoteMain.css";
import NoteContext from "../NoteContext";

export default function(props) {
  return (
    <NoteContext.Consumer>
      {value => {
        const note = value.notes.find(
          note => note.id === value.match.params.noteId
        );
        return (
          <section className="notes_section">
            <div className="note">
              <h2 className="note_name">{note.name}</h2>
              <div className="note_modification">
                <p className="mod_date">
                  Date modified on {""}{" "}
                  {moment(note.modified).format("Do MMM YYY")}
                </p>
                <button className="delete_note">Delete Note</button>
              </div>
            </div>
            <div>
              <p className="note_content">{note.content}</p>
            </div>
          </section>
        );
      }}
    </NoteContext.Consumer>
  );
}
