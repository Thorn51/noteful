import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Folder from "./Folder/Folder";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App_header">
          <Link to="/">
            <h1 className="App_title">Noteful</h1>
          </Link>
        </header>
        <main>
          <Route exact path="/" component={Main} />
          <Route path="/folder" component={Folder} />
        </main>
      </div>
    );
  }
}
