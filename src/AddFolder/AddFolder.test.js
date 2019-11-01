import React from "react";
import ReactDOM from "react-dom";
import AddFolder from "./AddFolder";
import renderer from "react-test-renderer";

describe("AddFolder", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddFolder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer.create(<AddFolder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
