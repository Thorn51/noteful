import React from "react";

const NoteContext = React.createContext({
  folders: [],
  notes: [],
  addFolder: () => {},
  addNote: () => {}
});

export default NoteContext;
