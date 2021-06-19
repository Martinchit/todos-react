import React from 'react';
import PropTypes from 'prop-types';
import { ToDoListItem } from './ToDoListItem';
import { Box } from '../../../../core/components/atoms/Box';
import { TO_DO_STATUS } from '../../../../core/lib/utils/toDoStatus';

export const ToDoList = ({
  toDos,
  onToDoUpdate,
  onToDoDelete,
  currentFilterOption,
}) => {
  return (
    <Box flexDirection="column">
      {toDos
        .filter((tD) =>
          currentFilterOption === TO_DO_STATUS.ALL
            ? tD
            : currentFilterOption === TO_DO_STATUS.COMPLETED
            ? tD.completed
            : !tD.completed
        )
        .map((toDo) => (
          <ToDoListItem
            toDo={toDo}
            key={toDo.id}
            onToDoUpdate={onToDoUpdate}
            onToDoDelete={onToDoDelete}
          />
        ))}
    </Box>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  onToDoUpdate: PropTypes.func,
  onToDoDelete: PropTypes.func,
  currentFilterOption: PropTypes.oneOf(Object.values(TO_DO_STATUS)),
};

ToDoList.defaultProps = {
  toDos: [],
  onToDoUpdate: null,
  onToDoDelete: null,
  currentFilterOption: TO_DO_STATUS.ALL,
};
