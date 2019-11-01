import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import renderer from "react-test-renderer";

describe("Sidebar", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer.create(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
