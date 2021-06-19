import React from "react";
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { ToDoInput } from "../ToDoInput";
import { ToDoInputField, DeleteIcon, HideIcon, ExpandIcon } from '../styled';
import { ENTER_KEY } from '../../../../../core/lib/utils/inputEventKey';

describe("ToDoInput", () => {
  const onToDoInsert = jest.fn();
  const value = 'test';
  const isExpanding = true;
  const toggleListView = jest.fn();

  it("renders correctly", () => {
    const wrapper = shallow(<ToDoInput />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles input onChange', () => {
    const wrapper = shallow(<ToDoInput onToDoInsert={onToDoInsert} />)
    expect(wrapper.find(DeleteIcon).at(0).props()['$visible']).toBeFalsy()
    wrapper.find(ToDoInputField).at(0).simulate('change', { target: { value } })
    expect(wrapper.find(ToDoInputField).at(0).props().value).toBe(value);
    expect(wrapper.find(DeleteIcon).at(0).props()['$visible']).toBeTruthy()
    wrapper.find(DeleteIcon).at(0).simulate('click');
    expect(wrapper.find(ToDoInputField).at(0).props().value).toBe('');
  })

  it('handles input onChange & inserts toDo onKeyUp', () => {
    const wrapper = shallow(<ToDoInput onToDoInsert={onToDoInsert} />)
    wrapper.find(ToDoInputField).at(0).simulate('change', { target: { value } })
    expect(wrapper.find(ToDoInputField).at(0).props().value).toBe(value);

    wrapper.find(ToDoInputField).at(0).props().onKeyUp({ code: 'test' });
    expect(onToDoInsert).not.toHaveBeenCalled();
    expect(wrapper.find(ToDoInputField).at(0).props().value).toBe(value);

    wrapper.find(ToDoInputField).at(0).props().onKeyUp({ code: ENTER_KEY });
    expect(onToDoInsert).toHaveBeenCalled();
    expect(onToDoInsert).toHaveBeenCalledWith(value);
    expect(wrapper.find(ToDoInputField).at(0).props().value).toBe('');
  })

  it('shows ExpandIcon', () => {
    const wrapper = shallow(<ToDoInput />)
    expect(wrapper.find(ExpandIcon).length).toBe(1);
    expect(wrapper.find(ExpandIcon).props()['$visible']).toBeFalsy();

    expect(wrapper.find(HideIcon).length).toBe(0);
  })

  it('shows HideIcon', () => {
    const wrapper = shallow(<ToDoInput isExpanding={isExpanding} toggleListView={toggleListView} hasToDos={true} />)
    expect(wrapper.find(ExpandIcon).length).toBe(0);
  
    expect(wrapper.find(HideIcon).length).toBe(1);
    expect(wrapper.find(HideIcon).props()['$visible']).toBeTruthy();
    wrapper.find(HideIcon).at(0).simulate('click')
    expect(toggleListView).toHaveBeenCalled();
  })
})