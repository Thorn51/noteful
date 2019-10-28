import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import moment from "moment";
import NoteContext from "../NoteContext";

export default function Main(props) {
  return (
    <NoteContext.Consumer>
      {value => {
        const noteList = Object.keys(value.notes).map(key => {
          return (
            <div key={value.notes[key].id} className="note">
              <Link to={`/note/${value.notes[key].id}`}>
                <h2 className="note_name">{value.notes[key].name}</h2>
              </Link>
              <div className="note_modification">
                <p className="mod_date">
                  {" "}
                  Date modified on {""}
                  {moment(value.notes[key].modified).format("Do MMM YYYY")}
                </p>
                <button className="delete_note">Delete Note</button>
              </div>
            </div>
          );
        });
        return (
          <section className="notes_section">
            <div className="note_list">{noteList}</div>
            <button className="add_note">Add Note</button>
          </section>
        );
      }}
    </NoteContext.Consumer>
  );
}
