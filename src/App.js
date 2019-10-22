import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
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
          <aside className="folder_sidebar">
            <h2>Folders</h2>
            <Route
              exact
              path="/"
              render={props => <Sidebar {...props} {...store} />}
            />
            <Route
              path="/folder"
              render={props => <Sidebar {...props} {...store} />}
            />
            <button className="add_folder">Add Folder</button>
          </aside>
          <section className="notes_section">
            <h2>Notes</h2>
            <Route
              exact
              path="/"
              render={props => <Main {...props} {...store} />}
            />
            <Route
              path="/folder/:folderId"
              component={props => {
                console.log(props.match);
                return <div />;
              }}
            />
            <button className="add_note">Add Note</button>
          </section>
        </main>
      </div>
    );
  }
}
