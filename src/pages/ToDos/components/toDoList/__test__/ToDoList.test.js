import React from 'react';
import { shallow } from 'enzyme'; 
import 'jest-styled-components';

import { ToDoList } from '../ToDoList';
import { ToDoListItem } from '../ToDoListItem';
import { TO_DO_STATUS } from '../../../../../core/lib/utils/toDoStatus';

describe('ToDoList', () => {
  const onToDoUpdate = jest.fn();
  const onToDoDelete = jest.fn();
  const toDos = [
    {
      id: '1',
      title: 'delectus aut autem',
      completed: true
    },
    {
      id: '2',
      title: 'delectus aut autem',
      completed: false
    },
    {
      id: '3',
      title: 'delectus aut autem',
      completed: true
    }
  ]
  it('renders correctly', () => {
    const wrapper = shallow(<ToDoList toDos={toDos} onToDoUpdate={onToDoUpdate} onToDoDelete={onToDoDelete } />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ToDoListItem).length).toBe(3);
  })

  it('renders correct number of completed task', () => {
    const wrapper = shallow(<ToDoList toDos={toDos} currentFilterOption={TO_DO_STATUS.COMPLETED} onToDoUpdate={onToDoUpdate} onToDoDelete={onToDoDelete } />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ToDoListItem).length).toBe(2);
  })

  it('renders correctly', () => {
    const wrapper = shallow(<ToDoList toDos={toDos} currentFilterOption={TO_DO_STATUS.ACTIVE} onToDoUpdate={onToDoUpdate} onToDoDelete={onToDoDelete } />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ToDoListItem).length).toBe(1);
  })

  it('handle onToDoDelete', () => {
    const wrapper = shallow(<ToDoList toDos={toDos} onToDoUpdate={onToDoUpdate} onToDoDelete={onToDoDelete } />)
    const firstToDoItem = wrapper.find(ToDoListItem).at(0);

    firstToDoItem.props().onToDoDelete();
    expect(onToDoDelete).toHaveBeenCalled();

    firstToDoItem.props().onToDoUpdate();
    expect(onToDoUpdate).toHaveBeenCalled();
  })
})
