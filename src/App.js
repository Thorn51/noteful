import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Folder from "./Folder/Folder";
import NoteSidebar from "./NoteSidebar/NoteSidebar";
import NoteMain from "./NoteMain/NoteMain";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App_header">
          <Link to="/">
            <h1 className="App_title">Noteful</h1>
          </Link>
        </header>
        <main className="app_main">
          <Route
            exact
            path="/"
            render={props => <Sidebar {...props} {...store} />}
          />
          <Route
            path="/folder"
            render={props => <Sidebar {...props} {...store} />}
          />
          <Route
            path="/note"
            render={props => <NoteSidebar {...props} {...store} />}
          />
          <Route
            exact
            path="/"
            render={props => <Main {...props} {...store} />}
          />
          <Route
            path="/folder/:folderId"
            component={props => <Folder {...props} {...store} />}
          />
          <Route
            path="/note/:noteId"
            component={props => <NoteMain {...props} {...store} />}
          />
        </main>
      </div>
    );
  }
}
