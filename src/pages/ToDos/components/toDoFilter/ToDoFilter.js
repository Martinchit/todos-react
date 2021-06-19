import React from 'react';
import PropTypes from 'prop-types';
import { ToDoFilterContainer, CompletedToDoDeleteButton } from './styled';
import { ToDoStats } from './ToDoStats';
import { ToDoFilterOptions } from './ToDoFilterOptions';
import { TO_DO_STATUS } from '../../../../core/lib/utils/toDoStatus';

export const ToDoFilter = ({
  currentFilterOption,
  completedTotal,
  activeTotal,
  onToDoCompletedClear,
}) => {
  return (
    <ToDoFilterContainer
      justifyContent="space-between"
      padding="10px 3%"
      width="94%"
    >
      <ToDoStats completedTotal={completedTotal} activeTotal={activeTotal} />
      <ToDoFilterOptions currentFilterOption={currentFilterOption} />
      <CompletedToDoDeleteButton onClick={onToDoCompletedClear}>
        Clear Completed
      </CompletedToDoDeleteButton>
    </ToDoFilterContainer>
  );
};

ToDoFilter.propTypes = {
  currentFilterOption: PropTypes.oneOf(Object.values(TO_DO_STATUS)),
  completedTotal: PropTypes.number,
  activeTotal: PropTypes.number,
  onToDoCompletedClear: PropTypes.func,
};

ToDoFilter.defaultProps = {
  currentFilterOption: TO_DO_STATUS.ALL,
  completedTotal: 0,
  activeTotal: 0,
  onToDoCompletedClear: null,
};
