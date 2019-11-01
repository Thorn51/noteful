import React from "react";
import ReactDOM from "react-dom";
import AddNote from "./AddNote";
import renderer from "react-test-renderer";

describe("AddNote", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddNote />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer.create(<AddNote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
