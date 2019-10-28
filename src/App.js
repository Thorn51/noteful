import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Folder from "./Folder/Folder";
import NoteSidebar from "./NoteSidebar/NoteSidebar";
import NoteMain from "./NoteMain/NoteMain";
import store from "./store";
import NoteContext from "./NoteContext";

export default class App extends React.Component {
  state = {
    folders: store.folders,
    notes: store.notes
  };
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes
    };
    return (
      <div>
        <header className="App_header">
          <Link to="/">
            <h1 className="App_title">Noteful</h1>
          </Link>
        </header>
        <main className="app_main">
          <NoteContext.Provider value={contextValue}>
            {/* Sidebar */}
            <Route exact path="/" component={Sidebar} />
            <Route path="/folder" component={Sidebar} />
            <Route path="/note/:noteId" component={NoteSidebar} />

            {/* Main */}
            <Route exact path="/" component={Main} />
            <Route path="/folder/:folderId" component={Folder} />
            <Route path="/note/:noteId" component={NoteMain} />
          </NoteContext.Provider>
        </main>
      </div>
    );
  }
}
