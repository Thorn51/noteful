import React from "react";

export default function Note(props) {
  console.log(props);
  return (
    <div className="note_sidebar">
      <button className="back_button">Go Back</button>
      <h2 className="folder_name">Testing</h2>
    </div>
  );
}
