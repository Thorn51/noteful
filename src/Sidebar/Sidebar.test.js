import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Sidebar", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
