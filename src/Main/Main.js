import React from "react";
import "./Main.css";
import Folder from "../Folder/Folder";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main_container">
        <section className="main_sidebar">
          <h2>Folder Section</h2>
          <Folder />
          <button className="main_add_folder_button">Add Folder</button>
        </section>
        <section className="main_content">
          <h2>Notes Section</h2>
          <button className="main_add_note_button">Add Note</button>
        </section>
      </div>
    );
  }
}
