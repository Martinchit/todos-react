import React from 'react';
import PropTypes from 'prop-types';
import { ToDoStatsDoneIcon, ToDoStatsActiveIcon } from './styled';
import { Box } from '../../../../core/components/atoms/Box';
import { Text } from '../../../../core/components/atoms/Text';

export const ToDoStats = ({ completedTotal, activeTotal }) => {
  const stats = React.useMemo(
    () => [
      {
        key: 'completed',
        number: completedTotal,
        color: 'success',
        Icon: ToDoStatsDoneIcon,
      },
      {
        key: 'active',
        number: activeTotal,
        color: 'warning',
        Icon: ToDoStatsActiveIcon,
      },
    ],
    [completedTotal, activeTotal]
  );
  return (
    <Box width="20%" justifyContent="flex-start" margin="0 5% 0 0">
      {stats.map(({ number, color, Icon, key }) => (
        <Box margin="0 3px 0 0" key={key}>
          <Icon />
          <Text fontColor={color} t>
            {number}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

ToDoStats.propTypes = {
  completedTotal: PropTypes.number,
  activeTotal: PropTypes.number,
};

ToDoStats.defaultProps = {
  completedTotal: 0,
  activeTotal: 0,
};
