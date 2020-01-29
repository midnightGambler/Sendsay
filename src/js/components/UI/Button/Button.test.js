import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";

it("renders Button correctly", () => {
  const btn = shallow(<Button>Кнопушка</Button>);
  expect(btn).toMatchSnapshot();
});

it("test button onClick event", () => {
  const mockedCallback = jest.fn();
  const btn = shallow(<Button onClick={mockedCallback}>Кнопушка</Button>);
  btn.find("button").simulate("click");
  expect(mockedCallback.mock.calls.length).toBe(1);
});
