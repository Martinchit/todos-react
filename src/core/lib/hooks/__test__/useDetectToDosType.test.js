import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { useDetectToDosType } from "../useDetectToDosType";
import { TO_DO_STATUS } from '../../utils/toDoStatus';

describe("useDetectToDosType", () => {
  let container = null;
  const mockHistoryAll = {
    location: {
      pathname: '/todos',
    },
    replace: jest.fn()
  }

  const mockHistoryCompleted = {
    location: {
      pathname: `/todos/${TO_DO_STATUS.COMPLETED}`,
    },
    replace: jest.fn()
  }

  const mockHistoryActive = {
    location: {
      pathname: `/todos/${TO_DO_STATUS.ACTIVE}`,
    },
    replace: jest.fn()
  }

  const mockHistoryInvalid = {
    location: {
      pathname: `/todos/something`,
    },
    replace: jest.fn()
  }

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  const TestComponent = ({ history }) => {
    const currentFilterOption = useDetectToDosType(history);
    return (
      <div>{currentFilterOption}</div>
    );
  }

  it("useDetectToDosType hook runs correctly - all", async () => {
    act(() => {
      render(<TestComponent history={mockHistoryAll} />, container);
    });
    expect(container.textContent).toBe(TO_DO_STATUS.ALL);
    // expect(wrapper.find('div').at(0).props().children).toBe(TO_DO_STATUS.ALL);
  });

  it("useDetectToDosType hook runs correctly - completed", async () => {
    act(() => {
      render(<TestComponent history={mockHistoryCompleted} />, container);
    });
    expect(container.textContent).toBe(TO_DO_STATUS.COMPLETED);
  });

  it("useDetectToDosType hook runs correctly - active", async () => {
    act(() => {
      render(<TestComponent history={mockHistoryActive} />, container);
    });
    expect(container.textContent).toBe(TO_DO_STATUS.ACTIVE);
  });

  it("useDetectToDosType hook runs correctly - invalid params", async () => {
    act(() => {
      render(<TestComponent history={mockHistoryInvalid} />, container);
    });
    expect(container.textContent).toBe(TO_DO_STATUS.ALL);
    expect(mockHistoryInvalid.replace).toHaveBeenCalled();
  });
})


