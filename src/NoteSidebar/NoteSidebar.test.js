import React from "react";
import ReactDOM from "react-dom";
import NoteSidebar from "./NoteSidebar";
import renderer from "react-test-renderer";

describe("NoteSidebar", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NoteSidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer.create(<NoteSidebar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
