import React from "react";
import store from "../store";

export default function Folder(props) {
  const folderNotes = store.notes.find(
    note => note.folderId === props.match.params.folderId
  );
  console.log(folderNotes);
  return nul(
    <section className="folder_notes">
      <p>Place Holder</p>
    </section>
  );
}
