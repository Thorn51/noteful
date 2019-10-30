import React, { Component } from "react";

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="Add_folder">
        <h2>Add Folder</h2>
        <div className="form_group">
          <label htmlFor="folder_name">Name of Folder</label>
          <input
            type="text"
            className="folder_name"
            name="folder_name"
            id="folder_name"
          />
        </div>
        <div className="add_folder_buttons">
          <button type="reset" className="form_button">
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
