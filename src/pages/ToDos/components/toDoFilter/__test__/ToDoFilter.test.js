import React from "react";
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { ToDoFilter } from "../ToDoFilter";

describe("ToDoFilter", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ToDoFilter />)
    expect(wrapper).toMatchSnapshot()
  })
})