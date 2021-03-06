import React from "react";
import { Register } from "../../../components/auth/Register";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockRegisterfn = jest.fn();
const Props = {
  errors: {}
};
let wrapper;

wrapper = shallow(<Register {...Props} registerUser={mockRegisterfn} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

it("displays form", () => {
  expect(wrapper.find("form").length).toEqual(1);
});

it("should call the mock register function", () => {
  wrapper.find("form").simulate("submit", { preventDefault() {} });
  expect(mockRegisterfn.mock.calls.length).toEqual(1);
});

describe("register action", () => {
  wrapper
    .find("#name")
    .simulate("change", { target: { name: "name", value: "testName" } });

  wrapper
    .find("#email")
    .simulate("change", { target: { name: "email", value: "test@gmail.com" } });

  wrapper.find("#location").simulate("change", {
    target: { name: "location", value: "testlocation" }
  });

  wrapper
    .find("#bio")
    .simulate("change", { target: { name: "bio", value: "testbio" } });

  wrapper.find("#password").simulate("change", {
    target: { name: "password", value: "passwordTest" }
  });

  wrapper.find("#password2").simulate("change", {
    target: { name: "password2", value: "password2Test" }
  });

  it("calls function with correct data", () => {
    expect(mockRegisterfn.mock.calls[0][0]).toEqual({
      name: "testName",
      email: "test@gmail.com",
      password: "passwordTest",
      password2: "password2Test",
      location: "testlocation",
      bio: "testbio"
    });
  });
});
