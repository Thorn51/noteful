import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar(props) {
  const folderList = Object.keys(props.folders).map(key => {
    return (
      <NavLink
        to={`/folder/${props.folders[key].id}`}
        key={props.folders[key].id}
      >
        <div className="folder">
          <h2 className="folder_name">{props.folders[key].name}</h2>
        </div>
      </NavLink>
    );
  });
  return (
    <aside className="folder_sidebar">
      <section className="folder_list">{folderList}</section>
      <button className="add_folder">Add Folder</button>
    </aside>
  );
}
