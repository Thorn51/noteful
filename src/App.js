import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App_header">
          <Link to="/">
            <h1 className="App_title">Noteful</h1>
          </Link>
        </header>
        <aside className="sidebar">
          <Route exact path="/" component={Sidebar} />
        </aside>
        <main>
          <Route exact path="/" component={Main} />
        </main>
      </div>
    );
  }
}
