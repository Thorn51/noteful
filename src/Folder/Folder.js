import React from "react";
import "./Folder.css";
import store from "../store";

export default class Folder extends React.Component {
  render() {
    const folders = store.folders;
    const folderList = Object.keys(folders).map(key => {
      return (
        <div key={folders[key].id} className="folder">
          {folders[key].name}
        </div>
      );
    });
    return <section className="folder_list">{folderList}</section>;
  }
}
