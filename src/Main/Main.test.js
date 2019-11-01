import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Main", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
