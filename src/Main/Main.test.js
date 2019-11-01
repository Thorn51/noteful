import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import renderer from "react-test-renderer";

describe("Main", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
