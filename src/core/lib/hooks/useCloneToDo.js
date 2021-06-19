import { useEffect, useState } from 'react';

export const useCloneToDo = (toDo) => {
  const [toDoClone, setToDoClone] = useState({ ...toDo });
  useEffect(() => {
    setToDoClone({ ...toDoClone });
    return () => false;
  }, [toDo]);
  return [toDoClone, setToDoClone];
};
