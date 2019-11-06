import React from "react";
import ReactDOM from "react-dom";
import AddFolder from "./AddFolder";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("AddFolder", () => {
  it("renders without throwing errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddFolder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the component as expected", () => {
    const wrapper = shallow(<AddFolder />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
