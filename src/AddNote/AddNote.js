import React, { Component } from "react";
import NoteContext from "../NoteContext";
import FormValidation from "../FormValidation/FormValidation";
import "./AddNote.css";

class AddNote extends Component {
  static contextType = NoteContext;

  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      },
      content: {
        value: "",
        touched: false
      },
      folderId: ""
    };
  }

  newNoteName(name) {
    this.setState({
      name: {
        value: name,
        touched: true
      }
    });
  }

  noteContent(content) {
    this.setState({
      content: {
        value: content,
        touched: true
      }
    });
  }

  noteFolder(value) {
    const folder = this.context.folders.filter(folder => {
      return folder.name === value;
    });
    const folderId = folder[0].id;
    this.setState({
      folderId
    });
  }

  validateName() {
    if (this.state.name.value.trim().length === 0) {
      return "A note name is required.";
    }
  }

  validateContent() {
    if (this.state.content.value.trim().length === 0) {
      return "The note requires content.";
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const lastModified = new Date(document.lastModified);
    const note = {
      name: this.state.name.value,
      modified: lastModified,
      folderId: this.state.folderId,
      content: this.state.content.value
    };
    const url = "http://localhost:9090/notes";
    const options = {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            "There has been a problem posting to localhost:9090/notes"
          );
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          name: {
            value: "",
            touched: false
          },
          content: {
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
      return <option key={option.id}>{option.name}</option>;
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
          {this.state.name.touched && (
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
            value={this.state.content.value}
            onChange={e => this.noteContent(e.target.value)}
          />
          {this.state.content.touched && (
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
