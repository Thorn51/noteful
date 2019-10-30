import React from "react";
import { NavLink, Link } from "react-router-dom";
import NoteContext from "../NoteContext";
import "./Sidebar.css";

export default class Sidebar extends React.Component {
  static contextType = NoteContext;
  render() {
    const folderList = Object.keys(this.context.folders).map(key => {
      return (
        <NavLink
          to={`/folder/${this.context.folders[key].id}`}
          key={this.context.folders[key].id}
        >
          <div className="folder">
            <h2 className="folder_name">{this.context.folders[key].name}</h2>
          </div>
        </NavLink>
      );
    });
    return (
      <aside className="folder_sidebar">
        <section className="folder_list">{folderList}</section>
        <Link to={"/add-folder"}>
          <div className="add_folder">Add Folder</div>
        </Link>
      </aside>
    );
  }
}
