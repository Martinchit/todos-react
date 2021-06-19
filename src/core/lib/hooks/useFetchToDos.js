import { useEffect, useState } from 'react';
import { ToDosInstance } from '../apis/axiosInstances';
import { retrieveToDos, updateToDos } from '../utils/localStorage';
import { uuid4Generate } from '../utils/uuid';
import { listSortingByCompletion } from '../utils/listSorting';

export const useFetchToDos = (update) => {
  const [toDos, setToDos] = useState([]);
  const [completedTotal, setCompletedTotal] = useState(0);
  const [activeTotal, setActiveTotal] = useState(0);

  useEffect(() => {
    const fetchToDos = async () => {
      let toDos = retrieveToDos();
      if (!toDos) {
        const res = await ToDosInstance({ method: 'get' });
        toDos = res.data.slice(0, 10).map(({ title, completed }) => ({
          title,
          completed,
          id: uuid4Generate(),
        }));
      }
      toDos = toDos.sort(listSortingByCompletion('completed'));
      const calculation = toDos.reduce(
        (a, { completed }) =>
          completed
            ? { ...a, completed: a.completed + 1 }
            : { ...a, active: a.active + 1 },
        { completed: 0, active: 0 }
      );
      setToDos(toDos);
      setCompletedTotal(calculation.completed);
      setActiveTotal(calculation.active);
      updateToDos(toDos);
    };
    fetchToDos();
    return () => false;
  }, [update]);

  return [toDos, completedTotal, activeTotal];
};
