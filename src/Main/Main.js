import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import moment from "moment";

export default function Main(props) {
  const noteList = Object.keys(props.notes).map(key => {
    return (
      <div key={props.notes[key].id} className="note">
        <Link to={`/note/${props.notes[key].id}`}>
          <h2 className="note_name">{props.notes[key].name}</h2>
        </Link>
        <div className="note_modification">
          <p className="mod_date">
            {" "}
            Date modified on {""}
            {moment(props.notes[key].modified).format("Do MMM YYYY")}
          </p>
          <button className="delete_note">Delete Note</button>
        </div>
      </div>
    );
  });
  return <div className="note_list">{noteList}</div>;
}
