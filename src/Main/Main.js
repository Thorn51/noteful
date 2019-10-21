import React from "react";
import "./Main.css";
import store from "../store";
import moment from "moment";

export default class Main extends React.Component {
  render() {
    const folderList = Object.keys(store.folders).map(key => {
      return (
        <div key={store.folders[key].id} className="folder">
          <h2>{store.folders[key].name}</h2>
        </div>
      );
    });

    const noteList = Object.keys(store.notes).map(key => {
      return (
        <div key={store.notes[key].id} className="note">
          <h2>{store.notes[key].name}</h2>
          <p>
            Date modified:{" "}
            {moment(store.notes[key].modified).format("Do, MMM YYYY")}
          </p>
          <button>Delete</button>
        </div>
      );
    });
    return (
      <div className="main_container">
        <section className="main_sidebar">
          <h2>Folder Section</h2>
          {folderList}
          <button className="main_add_folder_button">Add Folder</button>
        </section>
        <section className="main_content">
          <h2>Notes Section</h2>
          {noteList}
          <button className="main_add_note_button">Add Note</button>
        </section>
      </div>
    );
  }
}
