import React from 'react';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import {
  ToDoItemContainer,
  ToDoLabel,
  ToDoEditInput,
  ItemDeleteButton,
} from './styled';
import { useCloneToDo } from '../../../../core/lib/hooks/useCloneToDo';
import { ENTER_KEY } from '../../../../core/lib/utils/inputEventKey';

export const ToDoListItem = ({ toDo, onToDoUpdate, onToDoDelete }) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [toDoClone, setToDoClone] = useCloneToDo(toDo);

  const onToDoCloneUpdate = React.useCallback(
    ({ target }) => {
      setToDoClone({ ...toDoClone, title: target.value });
    },
    [toDoClone]
  );

  const toggleEditMode = React.useCallback(() => {
    setIsEditMode(!isEditMode);
  }, [isEditMode, setIsEditMode]);

  const onKeyUp = React.useCallback(
    ({ code }) => {
      if (code === ENTER_KEY) {
        onToDoUpdate(toDoClone);
        toggleEditMode();
      }
    },
    [onToDoUpdate, toDoClone]
  );

  const onInputBlur = React.useCallback(() => {
    onToDoUpdate(toDoClone);
    toggleEditMode();
  }, [onToDoUpdate, toDoClone]);

  const onToDoStatusUpdate = React.useCallback(
    (completed) => {
      onToDoUpdate({ ...toDoClone, completed });
    },
    [onToDoUpdate, toDoClone]
  );

  return (
    <ToDoItemContainer
      width="96%"
      justifyContent="space-between"
      padding="5px 2.5%"
      height="40px"
    >
      <Switch
        checked={toDo.completed}
        onChange={onToDoStatusUpdate}
        width={40}
        height={20}
      />
      {!isEditMode ? (
        <ToDoLabel onDoubleClick={toggleEditMode}>{toDoClone.title}</ToDoLabel>
      ) : (
        <ToDoEditInput
          type="text"
          value={toDoClone.title}
          onChange={onToDoCloneUpdate}
          onKeyUp={onKeyUp}
          onBlur={onInputBlur}
          autoFocus
        />
      )}
      <ItemDeleteButton onClick={() => onToDoDelete(toDo.id)} />
    </ToDoItemContainer>
  );
};

ToDoListItem.propTypes = {
  toDo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }),
  onToDoUpdate: PropTypes.func,
  onToDoDelete: PropTypes.func,
};

ToDoListItem.defaultProps = {
  toDo: {},
  onToDoUpdate: null,
  onToDoDelete: null,
};
