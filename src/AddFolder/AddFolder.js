import React, { Component } from "react";
import NoteContext from "../NoteContext";
import FormValidation from "../FormValidation/FormValidation";

class AddFolder extends Component {
  static contextType = NoteContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      touched: false
    };
  }

  newFolderName(name) {
    this.setState({
      name: name,
      touched: true
    });
  }

  validateName() {
    // const name = this.state.name.trim();
    if (this.state.name.trim().length === 0) {
      return "You must enter a name for the folder.";
    }
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
          touched: false
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
            required
            onChange={e => this.newFolderName(e.target.value)}
          />
          {this.state.touched && (
            <FormValidation message={this.validateName()} />
          )}
        </div>
        <div className="add_folder_buttons">
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
            disabled={this.validateName()}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default AddFolder;
