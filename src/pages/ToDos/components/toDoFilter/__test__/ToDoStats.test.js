import React from "react";
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { ToDoStats } from "../ToDoStats";

describe("ToDoFilter", () => {
  const completedTotal = 1;
  const activeTotal = 1
  it("renders correctly", () => {
    const wrapper = shallow(<ToDoStats completedTotal={completedTotal} activeTotal={activeTotal}  />)
    expect(wrapper).toMatchSnapshot()
  })
})