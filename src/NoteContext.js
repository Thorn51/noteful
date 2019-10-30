import React from "react";

const NoteContext = React.createContext({
  folders: [],
  notes: [],
  addFolder: () => {}
});

export default NoteContext;
