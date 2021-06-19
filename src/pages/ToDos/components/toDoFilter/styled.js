import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoCheckmarkDoneCircleSharp, IoAlertCircleSharp } from 'react-icons/io5';
import { Box } from '../../../../core/components/atoms/Box';

export const ToDoFilterContainer = styled(Box)`
  box-shadow: ${({ theme }) => `0 -5px 5px -7px ${theme.colors.black}`};
`;

export const ToDoStatsDoneIcon = styled(IoCheckmarkDoneCircleSharp)`
  color: ${({ theme }) => theme.colors.success};
  font-size: 1.5rem;
  margin-right: 3px;
`;

export const ToDoStatsActiveIcon = styled(IoAlertCircleSharp)`
  color: ${({ theme }) => theme.colors.warning};
  font-size: 1.5rem;
  margin-right: 3px;
`;

export const ToDoFilterOption = styled(Link)`
  margin: 0 3px;
  border-bottom: ${({ $selected, theme }) =>
    $selected ? `1px solid ${theme.colors.primary}` : 'none'};
  font-weight: ${({ $selected }) => ($selected ? 800 : 400)};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  padding: 0 10px;
  cursor: pointer;
`;

export const CompletedToDoDeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.danger};
  cursor: pointer;
  font-weight: 600;
`;
