import React from 'react';
import PropTypes from 'prop-types';
import { ToDoFilterOption } from './styled';
import { Box } from '../../../../core/components/atoms/Box';
import { TO_DO_STATUS } from '../../../../core/lib/utils/toDoStatus';

export const ToDoFilterOptions = ({ currentFilterOption }) => {
  const filters = React.useMemo(
    () => [
      {
        name: 'All',
        link: '/todos',
      },
      {
        name: 'Active',
        link: '/todos/active',
      },
      {
        name: 'Completed',
        link: '/todos/completed',
      },
    ],
    []
  );
  return (
    <Box width="40%" justifyContent="space-between">
      {filters.map(({ name, link }) => (
        <ToDoFilterOption
          key={name}
          to={link}
          $selected={currentFilterOption === name.toLowerCase()}
        >
          {name}
        </ToDoFilterOption>
      ))}
    </Box>
  );
};

ToDoFilterOptions.propTypes = {
  currentFilterOption: PropTypes.oneOf(Object.values(TO_DO_STATUS)),
};

ToDoFilterOptions.defaultProps = {
  currentFilterOption: TO_DO_STATUS.ALL,
};
