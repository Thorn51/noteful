import React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  const folderList = Object.keys(props.folders).map(key => {
    return (
      <div key={props.folders[key].id} className="folder">
        <h2 className="folder_name">{props.folders[key].name}</h2>
      </div>
    );
  });
  return <section className="folder_list">{folderList}</section>;
}
