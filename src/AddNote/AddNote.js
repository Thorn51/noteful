import React, { Component } from "react";
import NoteContext from "../NoteContext";
import FormValidation from "../FormValidation/FormValidation";
import "./AddNote.css";
import config from "../config";

class AddNote extends Component {
  static contextType = NoteContext;

  constructor(props) {
    super(props);
    this.state = {
      note_name: {
        value: "",
        touched: false
      },
      note_text: {
        value: "",
        touched: false
      },
      folderid: ""
    };
  }

  newNoteName(note_name) {
    this.setState({
      note_name: {
        value: note_name,
        touched: true
      }
    });
  }

  noteContent(note_text) {
    this.setState({
      note_text: {
        value: note_text,
        touched: true
      }
    });
  }

  noteFolder(value) {
    const folder = this.context.folders.filter(
      folder => folder.folder_name === value
    );
    const folderid = folder[0].id;

    this.setState({
      folderid
    });
  }

  validateName() {
    if (this.state.note_name.value.trim().length === 0) {
      return "A note name is required.";
    }
  }

  validateContent() {
    if (this.state.note_text.value.trim().length === 0) {
      return "The note requires content.";
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const lastModified = new Date(document.lastModified);
    const note = {
      note_name: this.state.note_name.value,
      modified: lastModified,
      folderid: this.state.folderid,
      note_text: this.state.note_text.value
    };
    const fetchUrl = config.API_ENDPOINT + "/api/notes";
    const options = {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + config.API_TOKEN
      }
    };
    fetch(fetchUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("There has been a problem posting to notes");
        } else {
          return response.json();
        }
      })
      .then(data => {
        console.log(data);
        this.setState({
          note_name: {
            value: "",
            touched: false
          },
          note_text: {
            value: "",
            touched: false
          },
          folderId: ""
        });
        this.context.addNote(data);
        this.props.history.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const options = this.context.folders.map(option => {
      return <option key={option.id}>{option.folder_name}</option>;
    });
    return (
      <form className="Add_note" onSubmit={e => this.onSubmit(e)}>
        <h2>Add Note</h2>
        <div className="form_group">
          <label htmlFor="note_name">Name of Note</label>
          <input
            type="text"
            className="note_name"
            name="note_name"
            id="note_name"
            required
            onChange={e => this.newNoteName(e.target.value)}
          />
          {this.state.note_name.touched && (
            <FormValidation message={this.validateName()} />
          )}
        </div>
        <div className="form_group">
          <label htmlFor="folder_selection">Select a Folder</label>
          <select
            className="folder_select"
            name="folder_select"
            id="folder_select"
            required
            onChange={e => this.noteFolder(e.target.value)}
          >
            <option value="" defaultValue>
              Please Select a Folder
            </option>
            {options}
          </select>
        </div>
        <div className="form_group">
          <label htmlFor="note_content">Add Notes</label>
          <textarea
            className="note_content"
            name="note_content"
            id="note_content"
            required
            value={this.state.note_text.value}
            onChange={e => this.noteContent(e.target.value)}
          />
          {this.state.note_text.touched && (
            <FormValidation message={this.validateContent()} />
          )}
        </div>
        <div className="add_notes_buttons">
          <button
            type="reset"
            className="form_button"
            onClick={() => this.props.history.goBack()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="form_button"
            disabled={this.validateContent() || this.validateName()}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default AddNote;
