import React from "react";
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { ToDoFilterOptions } from "../ToDoFilterOptions";
import { ToDoFilterOption } from '../styled';

describe("ToDoFilterOptions", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ToDoFilterOptions />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ToDoFilterOption).length).toBe(3);
  })
})