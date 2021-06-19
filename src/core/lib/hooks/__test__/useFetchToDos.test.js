import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import mockAxios from 'axios';

import { useFetchToDos } from "../useFetchToDos";
import { updateToDos } from '../../utils/localStorage'

describe("useFetchToDos", () => {
  const waitForAsync = () => new Promise(resolve => setImmediate(resolve))
  const result = [
    {
      id: '1',
      title: 'delectus aut autem',
      completed: true
    },
    {
      id: '2',
      title: 'delectus aut autem',
      completed: false
    }
  ]
  let container = null;

  const TestComponent = ({ update }) => {
    const [toDos, completedTotal, activeTotal] = useFetchToDos(update);
    return (
      <React.Fragment>
        <p>{JSON.stringify(toDos)}</p>
        <h1>{completedTotal}</h1>
        <h2>{activeTotal}</h2>
      </React.Fragment>
    );
  }

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    const localStorageMock = (function() {
      let store = {};
      return {
        getItem: function(key) {
          return store[key] || null
        },
        setItem: function(key, value) {
          store[key] = value.toString()
        },
        clear: function() {
          store = {}
        },
      }
    })()

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })

    updateToDos(null)
  })

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });


  it("fetches from endpoint", async (done) => {
    updateToDos([...result]);

    act(() => {
      render(<TestComponent update={1} />, container);
    });
    await waitForAsync();
    const items = JSON.parse(container.querySelector('p').textContent)

    expect(items[0].title).toBe(result[1].title)
    expect(items[0].completed).toBe(result[1].completed)
    expect(items[1].title).toBe(result[0].title)
    expect(items[1].completed).toBe(result[0].completed)
    expect(container.querySelector('h1').textContent).toBe('1');
    expect(container.querySelector('h2').textContent).toBe('1');

    done();
  });

  it("fetches from endpoint", async (done) => {
    mockAxios.mockImplementationOnce(() => {
      return Promise.resolve({
        status: 200, 
        data: [...result]
      })
    });

    act(() => {
      render(<TestComponent update={1} />, container);
    });
    await waitForAsync();
    const items = JSON.parse(container.querySelector('p').textContent)

    expect(items[0].title).toBe(result[1].title)
    expect(items[0].completed).toBe(result[1].completed)
    expect(items[1].title).toBe(result[0].title)
    expect(items[1].completed).toBe(result[0].completed)
    expect(container.querySelector('h1').textContent).toBe('1');
    expect(container.querySelector('h2').textContent).toBe('1');

    expect(mockAxios).toHaveBeenCalled()
    done();
  });
})