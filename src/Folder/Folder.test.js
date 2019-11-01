import React from "react";
import ReactDOM from "react-dom";
import Folder from "./Folder";
import renderer from "react-test-renderer";

describe("Folder", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Folder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer.create(<Folder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
