import React from "react";
import DropzoneOverlay from "./DropzoneOverlay";
import { shallow } from "enzyme";

it("should render component properly", () => {
  const dropzoneOverlay = shallow(<DropzoneOverlay />);
  expect(dropzoneOverlay).toMatchSnapshot();
});
