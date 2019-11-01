import React from "react";
import ReactDOM from "react-dom";
import NoteMain from "./NoteMain";
import renderer from "react-test-renderer";

describe("NoteMain", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NoteMain />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer.create(<NoteMain />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
