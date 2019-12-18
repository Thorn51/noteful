import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Folder from "./Folder/Folder";
import NoteSidebar from "./NoteSidebar/NoteSidebar";
import NoteMain from "./NoteMain/NoteMain";
import NoteContext from "./NoteContext";
import AddFolder from "./AddFolder/AddFolder";
import AddNote from "./AddNote/AddNote";
import MainError from "./ErrorBoundaries/MainError";
import config from "./config";

export default class App extends React.Component {
  state = {
    folders: [],
    notes: []
  };

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    });
  };

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };

  deleteNote = noteId => {
    const updateNotes = this.state.notes.filter(note => note.id !== noteId);
    const fetchUrl = config.API_ENDPOINT + "/api/notes/" + noteId;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + config.API_TOKEN
      }
    };

    fetch(fetchUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("There has been a problem removing the note");
        }
      })
      .then(() => {
        this.setState({
          notes: updateNotes
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    const fetchFoldersUrl = config.API_ENDPOINT + "/api/folders";
    const fetchNotesUrl = config.API_ENDPOINT + "/api/notes";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    fetch(fetchFoldersUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("There has been an error fetching the folders.");
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          folders: data
        });
      })
      .catch(error => {
        console.log(error);
      });

    fetch(fetchNotesUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("There has been an error fetching the notes.");
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          notes: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addFolder: this.addFolder,
      addNote: this.addNote,
      deleteNote: this.deleteNote
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
            <Route path="/add-folder" component={AddFolder} />

            {/* Main */}
            <MainError>
              <Route exact path="/" component={Main} />
              <Route path="/folder/:folderId" component={Folder} />
              <Route path="/note/:noteId" component={NoteMain} />
              <Route path="/add-note" component={AddNote} />
            </MainError>
          </NoteContext.Provider>
        </main>
      </div>
    );
  }
}
