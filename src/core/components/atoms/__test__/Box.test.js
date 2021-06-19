import React from "react";
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { Box } from "../Box";
import { Theme } from "../../../lib/theme/globalStyle";

describe("Box", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Box theme={Theme}  />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('box-shadow', 'none')
    expect(wrapper).toHaveStyleRule('background-color', 'transparent')
  })

  it("renders box shadow", () => {
    const wrapper = shallow(<Box $elevation={true} theme={Theme} />)
    expect(wrapper).toHaveStyleRule('box-shadow', 'rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 1px 3px 1px')
  })
})