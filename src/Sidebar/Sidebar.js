import React from "react";

export default function Sidebar(props) {
  const folderList = Object.keys(props.folders).map((key, index) => {
    return (
      <div key={index}>
        <h2 className="folder_name">{props.folders[key].name}</h2>
      </div>
    );
  });
  return <section className="folder_list">{folderList}</section>;
}
