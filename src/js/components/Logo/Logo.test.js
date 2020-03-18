import React from "react";
import { shallow } from "enzyme";
import Logo from "./Logo";

it("should render component properly", () => {
  const logo = shallow(<Logo />);
  expect(logo).toMatchSnapshot();
});
