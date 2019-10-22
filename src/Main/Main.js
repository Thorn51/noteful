import React from "react";

export default function Main(props) {
  const noteList = Object.keys(props.notes).map(key => {
    return (
      <div key={props.notes[key].id} className="note">
        <h2 className="note_name">{props.notes[key].name}</h2>
        <div>
          <p className="mod_date">{props.notes[key].modified}</p>
          <button className="delete_note">Delete Note</button>
        </div>
      </div>
    );
  });
  return <div className="note_list">{noteList}</div>;
}
