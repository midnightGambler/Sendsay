import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

it("should render card component (no props passed)", () => {
  const card = shallow(
    <Card>
      <div>ha ha business</div>
    </Card>
  );
  expect(card).toMatchSnapshot();
});
it("should render card component with title", () => {
  const card = shallow(
    <Card title="sample title">
      <div>ha ha business</div>
    </Card>
  );
  expect(card).toMatchSnapshot();
});
it("should render card component with subtitle", () => {
  const card = shallow(
    <Card subtitle="sample subtitle">
      <div>ha ha business</div>
    </Card>
  );
  expect(card).toMatchSnapshot();
});
