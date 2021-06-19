import React from "react";
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { ToDoFilterContainer, ToDoStatsDoneIcon, ToDoStatsActiveIcon, ToDoFilterOption, CompletedToDoDeleteButton } from "../styled";
import { Theme } from '../../../../../core/lib/theme/globalStyle';

describe("ToDoFilter styled components", () => {
  it("renders correctly", () => {
    const tDFC = shallow(<ToDoFilterContainer theme={Theme}  />)
    expect(tDFC).toMatchSnapshot()

    const tDSDI = shallow(<ToDoStatsDoneIcon theme={Theme}  />)
    expect(tDSDI).toMatchSnapshot()

    const tDSAI = shallow(<ToDoStatsActiveIcon theme={Theme}  />)
    expect(tDSAI).toMatchSnapshot()

    const tDFO = shallow(<ToDoFilterOption to="" theme={Theme}  />)
    expect(tDFO).toMatchSnapshot()
    expect(tDFO).toHaveStyleRule('border-bottom', 'none')
    expect(tDFO).toHaveStyleRule('font-weight', '400')

    const cTDDB = shallow(<CompletedToDoDeleteButton theme={Theme}  />)
    expect(cTDDB).toMatchSnapshot()
  })

  it('ToDoFilterOption with $selected as true', () => {
    const tDFO = shallow(<ToDoFilterOption to="" $selected theme={Theme}  />)
    expect(tDFO).toHaveStyleRule('border-bottom', '1px solid #3772ff')
    expect(tDFO).toHaveStyleRule('font-weight', '800')
  })
})