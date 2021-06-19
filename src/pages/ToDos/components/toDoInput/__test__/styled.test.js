import React from "react";
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { ToDoInputField, DeleteIcon, HideIcon, ExpandIcon } from "../styled";
import { Theme } from '../../../../../core/lib/theme/globalStyle';

describe("ToDoInput styled components", () => {
  it("renders correctly", () => {
    const visible = 'visible';

    const tDIF = shallow(<ToDoInputField theme={Theme}  />)
    expect(tDIF).toMatchSnapshot()

    const dI = shallow(<DeleteIcon $visible={true} theme={Theme}  />)
    expect(dI).toMatchSnapshot()
    expect(dI).toHaveStyleRule('visibility', visible)

    const hI = shallow(<HideIcon $visible={true} theme={Theme}  />)
    expect(hI).toMatchSnapshot()
    expect(hI).toHaveStyleRule('visibility', visible)

    const eI = shallow(<ExpandIcon $visible={true} theme={Theme}  />)
    expect(eI).toMatchSnapshot()
    expect(eI).toHaveStyleRule('visibility', visible)
  })

  it("set Icon visibility to hidden", () => {
    const hidden = 'hidden'

    const dI = shallow(<DeleteIcon theme={Theme} />)
    expect(dI).toHaveStyleRule('visibility', hidden)

    const hI = shallow(<HideIcon theme={Theme} />)
    expect(hI).toHaveStyleRule('visibility', hidden)

    const eI = shallow(<ExpandIcon theme={Theme} />)
    expect(eI).toHaveStyleRule('visibility', hidden)
  })
})