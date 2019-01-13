import Tabs from "@material-ui/core/Tabs";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { SimpleTabs } from "./Tabs";

configure({ adapter: new Adapter() });

describe("<SimpleTabs/>", () => {
  it("should render SimpleTabs component with One tabs element", () => {
    const wrapper = shallow(<SimpleTabs getWeather={() => {}} />);
    expect(wrapper.find(Tabs)).toHaveLength(1);
  });
});
