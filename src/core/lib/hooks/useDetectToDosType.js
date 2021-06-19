import { useEffect, useState } from 'react';
import { TO_DO_STATUS } from '../utils/toDoStatus';

export const useDetectToDosType = (history) => {
  const [validPathnames] = useState([TO_DO_STATUS.COMPLETED, TO_DO_STATUS.ACTIVE]);
  const [currentFilterOption, setCurrentFilterOption] = useState(TO_DO_STATUS.ALL);
  useEffect(() => {
    const pathnameSplit = history.location.pathname.split('/');
    if (pathnameSplit.length === 3) {
      const filterOption = pathnameSplit[2];
      if (validPathnames.find((v) => v === filterOption)) {
        setCurrentFilterOption(filterOption);
      } else {
        history.replace('/todos');
      }
    } else {
      setCurrentFilterOption(TO_DO_STATUS.ALL);
    }
    return () => false;
  }, [history.location.pathname]);
  return currentFilterOption;
};
