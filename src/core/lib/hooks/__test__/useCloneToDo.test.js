import React from "react";
import { shallow } from "enzyme";

import { useCloneToDo } from "../useCloneToDo";

describe("useCloneToDo", () => {
  const toDo = {
    id: '1',
    title: 'delectus aut autem',
    completed: true
  }
  const newToDo = {
    id: '1',
    title: 'delectus aut autem',
    completed: false
  }
  const TestComponent = ({ toDo, newToDo }) => {
    const [toDoClone, setToDoClone] = useCloneToDo(toDo);
    return (
      <React.Fragment>
        <div>{JSON.stringify(toDoClone)}</div>
        <button onClick={() => setToDoClone(newToDo)}>Click</button>
      </React.Fragment>
    );
  }

  it("useCloneToDo hook runs correctly", async () => {
    const wrapper = shallow(<TestComponent toDo={toDo} newToDo={newToDo} />)
    expect(wrapper.find('div').at(0).props().children).toBe(JSON.stringify(toDo));
    wrapper.find('button').at(0).simulate('click')
    expect(wrapper.find('div').at(0).props().children).toBe(JSON.stringify(newToDo));
  });
})