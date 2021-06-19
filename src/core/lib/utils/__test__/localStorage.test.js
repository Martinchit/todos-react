import { retrieveToDos, updateToDos } from '../localStorage';

describe('localStorage function', () => {
  const mockToDos = [
    {
      id: 1,
      title: 'one',
      completed: false
    }
  ];
  beforeEach(() => {
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
  })

  it('handles functions correctly', () => {
    expect(retrieveToDos()).toBe(null);
    updateToDos(mockToDos);
    expect(JSON.stringify(retrieveToDos())).toBe(JSON.stringify(mockToDos));
    updateToDos([]);
    expect(JSON.stringify(retrieveToDos())).toBe('[]');
  });
});
