export const retrieveToDos = () => {
  const result = localStorage.getItem(process.env.REACT_APP_TODO_LOCAL_STORAGE_KEY);
  return result ? JSON.parse(result) : null;
};

export const updateToDos = (toDos) => {
  const stringified = JSON.stringify(toDos);
  localStorage.setItem(process.env.REACT_APP_TODO_LOCAL_STORAGE_KEY, stringified);
};
