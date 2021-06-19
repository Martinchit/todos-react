import React from "react";
import { shallow } from 'enzyme'; 
import Switch from 'react-switch';
import 'jest-styled-components';

import { ToDoListItem } from "../ToDoListItem";
import { ToDoLabel, ToDoEditInput, ItemDeleteButton } from '../styled';
import { ENTER_KEY } from '../../../../../core/lib/utils/inputEventKey';

describe("ToDoListItem", () => {
  const toDo = {
    id: '1',
    title: 'delectus aut autem',
    completed: true
  }
  const onToDoUpdate = jest.fn();
  const onToDoDelete = jest.fn();

  it("renders correctly", () => {
    const wrapper = shallow(<ToDoListItem toDo={toDo} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles onToDoCloneUpdate', () => {
    const value = 'test'
    const wrapper = shallow(<ToDoListItem toDo={toDo} />)
    wrapper.find(ToDoLabel).at(0).simulate('doubleClick')
    wrapper.find(ToDoEditInput).at(0).simulate('change', { target: { value } })
    expect(wrapper.find(ToDoEditInput).at(0).props().value).toBe(value)
  })

  it('handles onToDoUpdate', () => {
    const wrapper = shallow(<ToDoListItem toDo={toDo} onToDoUpdate={onToDoUpdate} />)
    wrapper.find(ToDoLabel).at(0).simulate('doubleClick')
    wrapper.find(ToDoEditInput).at(0).props().onKeyUp({ code: 'test' });
    expect(onToDoUpdate).not.toHaveBeenCalled();
    wrapper.find(ToDoEditInput).at(0).props().onKeyUp({ code: ENTER_KEY });
    expect(onToDoUpdate).toHaveBeenCalled();
    expect(wrapper.find(ToDoEditInput).length).toBe(0)
    onToDoUpdate.mockClear();
  })

  it('handles onInputBlur', () => {
    const wrapper = shallow(<ToDoListItem toDo={toDo} onToDoUpdate={onToDoUpdate} />)
    wrapper.find(ToDoLabel).at(0).simulate('doubleClick')
    wrapper.find(ToDoEditInput).at(0).props().onBlur();
    expect(onToDoUpdate).toHaveBeenCalled();
    expect(wrapper.find(ToDoEditInput).length).toBe(0);
    onToDoUpdate.mockClear();
  })

  it('handles onToDoStatusUpdate', () => {
    const wrapper = shallow(<ToDoListItem toDo={toDo} onToDoUpdate={onToDoUpdate} />)
    wrapper.find(Switch).at(0).simulate('change')
    expect(onToDoUpdate).toHaveBeenCalled();
    onToDoUpdate.mockClear();
  })

  it('handles onToDoDelete', () => {
    const wrapper = shallow(<ToDoListItem toDo={toDo} onToDoDelete={onToDoDelete} />)
    wrapper.find(ItemDeleteButton).at(0).simulate('click')
    expect(onToDoDelete).toHaveBeenCalled();
    onToDoDelete.mockClear();
  })
})