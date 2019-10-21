import React from "react";
import "./App.css";
import Main from "./Main/Main";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App_header">
          <h1 className="App_title">Noteful</h1>
        </header>
        <main>
          <Main />
        </main>
      </div>
    );
  }
}
