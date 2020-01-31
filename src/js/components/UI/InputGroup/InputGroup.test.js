import React from "react";
import { shallow } from "enzyme";
import InputGroup from "./InputGroup";

it("should render component properly", () => {
  const inputGroup = shallow(
    <InputGroup
      inputProps={[{ name: "test" }, { name: "anotherTest" }]}
      label="test"
    />
  );
  expect(inputGroup).toMatchSnapshot();
});

it("should render component with error fields", () => {
  const inputGroup = shallow(
    <InputGroup
      label="test"
      inputProps={[{ error: "test" }, { error: "another test" }]}
    />
  );
  expect(inputGroup).toMatchSnapshot();
});

it("should test InputGroup onChange event", () => {
  const mockedCallback = jest.fn();
  const inputGroup = shallow(
    <InputGroup
      inputProps={[
        {
          onChange: mockedCallback
        }
      ]}
      label="test"
    />
  );
  inputGroup.find("input").simulate("change");
  expect(mockedCallback.mock.calls.length).toBe(1);
});
