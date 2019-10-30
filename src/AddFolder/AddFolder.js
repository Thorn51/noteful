import React, { Component } from "react";
import NoteContext from "../NoteContext";

class AddFolder extends Component {
  static contextType = NoteContext;
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  newFolderName(name) {
    this.setState({
      name
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const folderName = { name: this.state.name };
    const url = "http://localhost:9090/folders";
    const options = {
      method: "POST",
      body: JSON.stringify(folderName),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("There has been a problem reaching the server.");
        } else {
          return res.json();
        }
      })
      .then(data => {
        this.setState({
          name: "",
          id: ""
        });
        this.context.addFolder(data);
        this.props.history.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  }

  cancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <form className="Add_folder" onSubmit={e => this.onSubmit(e)}>
        <h2>Add Folder</h2>
        <div className="form_group">
          <label htmlFor="folder_name">Name of Folder</label>
          <input
            type="text"
            className="folder_name"
            name="folder_name"
            id="folder_name"
            onChange={e => this.newFolderName(e.target.value)}
          />
        </div>
        <div className="add_folder_buttons">
          <button
            type="reset"
            className="form_button"
            onClick={() => this.props.history.goBack()}
          >
            Cancel
          </button>
          <button type="submit" className="form_button">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default AddFolder;
