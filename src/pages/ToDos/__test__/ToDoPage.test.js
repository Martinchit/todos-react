import React from "react";
import { shallow } from 'enzyme';
import { unmountComponentAtNode } from "react-dom";

import { ToDosPage } from "../ToDosPage";

describe("ToDosPage", () => {

  it("renders correctly", () => {
    const wrapper = shallow(<ToDosPage />)
    expect(wrapper).toMatchSnapshot()
  })
})