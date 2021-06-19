import React from 'react';
import PropTypes from 'prop-types';
import { ToDoInput } from './components/toDoInput/ToDoInput';
import { ToDoList } from './components/toDoList/ToDoList';
import { ToDoFilter } from './components/toDoFilter/ToDoFilter';
import { Box } from '../../core/components/atoms/Box';
import { Text } from '../../core/components/atoms/Text';
import { useFetchToDos } from '../../core/lib/hooks/useFetchToDos';
import { updateToDos } from '../../core/lib/utils/localStorage';
import { useDetectToDosType } from '../../core/lib/hooks/useDetectToDosType';
import { uuid4Generate } from '../../core/lib/utils/uuid';

export const ToDosPage = ({ history }) => {
  const currentFilterOption = useDetectToDosType(history);
  const [update, setUpdate] = React.useState(0);
  const [isExpanding, setIsExpanding] = React.useState(true);
  const [toDos, completedTotal, activeTotal] = useFetchToDos(update);

  const toggleListView = React.useCallback(() => {
    setIsExpanding(!isExpanding);
  }, [isExpanding]);

  const onToDoInsert = React.useCallback(
    (newToDo) => {
      const newToDosList = [
        ...toDos,
        { title: newToDo, completed: false, id: uuid4Generate() },
      ];
      updateToDos(newToDosList);
      setUpdate(update + 1);
    },
    [update, toDos]
  );

  const onToDoUpdate = React.useCallback(
    (updatedToDo) => {
      const newToDosList = toDos.map((toDo) =>
        toDo.id === updatedToDo.id ? { ...updatedToDo } : { ...toDo }
      );
      updateToDos(newToDosList);
      setUpdate(update + 1);
    },
    [toDos]
  );

  const onToDoDelete = React.useCallback(
    (toDoId) => {
      const newToDosList = toDos.filter(({ id }) => id !== toDoId);
      updateToDos(newToDosList);
      setUpdate(update + 1);
    },
    [update, toDos, setUpdate]
  );

  const onToDoCompletedClear = React.useCallback(() => {
    const newToDosList = toDos.filter(({ completed }) => !completed);
    updateToDos(newToDosList);
    setUpdate(update + 1);
  }, [update, toDos, setUpdate]);

  return (
    <Box flexDirection="column">
      <Text fontColor="danger" fontSize="2">
        ToDos
      </Text>
      <Box
        margin="20px 0"
        width="50%"
        borderRadius="6px"
        $elevation
        flexDirection="column"
      >
        <ToDoInput
          hasToDos={toDos.length > 0}
          isExpanding={isExpanding}
          toggleListView={toggleListView}
          onToDoInsert={onToDoInsert}
        />
        {toDos.length > 0 ? (
          <React.Fragment>
            {isExpanding ? (
              <ToDoList
                toDos={toDos}
                onToDoUpdate={onToDoUpdate}
                onToDoDelete={onToDoDelete}
                currentFilterOption={currentFilterOption}
              />
            ) : null}
            <ToDoFilter
              completedTotal={completedTotal}
              activeTotal={activeTotal}
              currentFilterOption={currentFilterOption}
              onToDoCompletedClear={onToDoCompletedClear}
            />
          </React.Fragment>
        ) : null}
      </Box>
    </Box>
  );
};

ToDosPage.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
};

ToDosPage.defaultProps = {
  history: {
    location: {
      pathname: '',
    },
  },
};
