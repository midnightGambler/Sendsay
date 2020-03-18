import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

it("should render Input field properly", () => {
  const input = shallow(<Input label="test" />);
  expect(input).toMatchSnapshot();
});

it("should render Input field with error", () => {
  const input = shallow(<Input label="test" error="error" />);
  expect(input).toMatchSnapshot();
});

it('should test Input onChange event', () => {
  const mockedCallback = jest.fn()
  const input = shallow(<Input onChange={mockedCallback} label="test" />);
  input.find('input').simulate('change');
  expect(mockedCallback.mock.calls.length).toBe(1);
})
