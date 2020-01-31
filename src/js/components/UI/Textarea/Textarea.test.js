import React from "react";
import { shallow } from "enzyme";
import Textarea from "./Textarea";

it("should render component properly", () => {
  const textarea = shallow(<Textarea label="test" />);

  expect(textarea).toMatchSnapshot();
});

it("should render component with error field", () => {
  const textarea = shallow(<Textarea error="test error" label="test" />);

  expect(textarea).toMatchSnapshot();
});

it("should test component onChange event", () => {
  const mockedCallback = jest.fn();
  const textarea = shallow(<Textarea onChange={mockedCallback} label="test" />);
  textarea.find("textarea").simulate("change");
  expect(mockedCallback.mock.calls.length).toBe(1);
});
