import React from "react";
import ReactDOM from "react-dom";
import Folder from "./Folder";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Folder", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Folder />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Folder />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
