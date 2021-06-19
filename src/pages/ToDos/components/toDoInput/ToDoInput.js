import React from 'react';
import PropTypes from 'prop-types';
import { ToDoInputField, DeleteIcon, ExpandIcon, HideIcon } from './styled';
import { Box } from '../../../../core/components/atoms/Box';
import { ENTER_KEY } from '../../../../core/lib/utils/inputEventKey';

export const ToDoInput = ({
  hasToDos,
  isExpanding,
  toggleListView,
  onToDoInsert,
}) => {
  const [toDoInput, setToDoInput] = React.useState('');

  const onInputChange = React.useCallback(
    ({ target }) => {
      setToDoInput(target.value);
    },
    [setToDoInput]
  );

  const emptyInput = React.useCallback(() => {
    setToDoInput('');
  }, []);

  const onKeyUp = React.useCallback(
    ({ code }) => {
      if (code === ENTER_KEY) {
        onToDoInsert(toDoInput.trim());
        emptyInput();
      }
    },
    [emptyInput, onToDoInsert, toDoInput]
  );

  return (
    <Box justifyContent="space-between" $elevation>
      {isExpanding ? (
        <HideIcon $visible={hasToDos} onClick={hasToDos ? toggleListView : null} />
      ) : (
        <ExpandIcon $visible={hasToDos} onClick={hasToDos ? toggleListView : null} />
      )}
      <ToDoInputField
        onChange={onInputChange}
        value={toDoInput}
        type="text"
        placeholder="What needs to be done"
        onKeyUp={onKeyUp}
      />
      <DeleteIcon $visible={toDoInput.length > 0} onClick={emptyInput} />
    </Box>
  );
};

ToDoInput.propTypes = {
  hasToDos: PropTypes.bool,
  isExpanding: PropTypes.bool,
  toggleListView: PropTypes.func,
  onToDoInsert: PropTypes.func,
};

ToDoInput.defaultProps = {
  hasToDos: false,
  isExpanding: false,
  toggleListView: null,
  onToDoInsert: null,
};
