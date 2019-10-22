import React from "react";
import { NavLink } from "react-router-dom";
import "./Folder.css";
import "./Folder.css";
import store from "../store";

export default class Folder extends React.Component {
  render() {
    const folderList = Object.keys(store.folders).map(key => {
      return (
        <NavLink to={`/folder`} key={store.folders[key].id}>
          <div className="folder">
            <h2 className="folder_name">{store.folders[key].name}</h2>
          </div>
        </NavLink>
      );
    });
    return (
      <div className="folder_container">
        <section className="folder_sidebar">
          <h2>Folders</h2>
          {folderList}
          <button className="folder_add_folder_button">Add Folder</button>
        </section>
        <section className="folder_content">
          <h2>Notes</h2>
          <button className="folder_add_note_button">Add Note</button>
        </section>
      </div>
    );
  }
}
