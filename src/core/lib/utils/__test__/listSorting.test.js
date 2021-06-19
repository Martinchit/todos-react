import { listSortingByCompletion } from '../listSorting';

describe('listSorting function', () => {
  const list = [{completed: true, title: 'a'}, {completed: false, title: 'b'}]

  it('sorts listSortingByCompletion with key completed', () => {
    const key = 'completed'
    const sortedList = list.sort(listSortingByCompletion(key));
    expect(sortedList[0]).toEqual({completed: false, title: 'b'});
  });
});
