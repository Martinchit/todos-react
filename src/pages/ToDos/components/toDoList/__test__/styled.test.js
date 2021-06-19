import React from "react";
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { ToDoItemContainer, ToDoLabel, ToDoEditInput, ItemDeleteButton } from "../styled";
import { Theme } from '../../../../../core/lib/theme/globalStyle';

describe("ToDoList styled components", () => {
  it("renders correctly", () => {
    const tDIC = shallow(<ToDoItemContainer theme={Theme}  />)
    expect(tDIC).toMatchSnapshot()

    const tDL = shallow(<ToDoLabel $visible={true} theme={Theme}  />)
    expect(tDL).toMatchSnapshot()

    const tDEI = shallow(<ToDoEditInput $visible={true} theme={Theme}  />)
    expect(tDEI).toMatchSnapshot()

    const iDB = shallow(<ItemDeleteButton $visible={true} theme={Theme}  />)
    expect(iDB).toMatchSnapshot()
  })
})