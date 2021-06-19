import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Box } from '../../../../core/components/atoms/Box';

export const ToDoItemContainer = styled(Box)`
  box-shadow: ${({ theme }) => `0 -5px 5px -7px ${theme.colors.black}`};
`;

export const ToDoLabel = styled.label`
  width: 80%;
  cursor: pointer;
`;

export const ToDoEditInput = styled.input`
  height: 100%;
  width: 86%;
  background-color: transparent;

  :focus,
  :active,
  :hover {
    outline: none;
  }

  :focus {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.success}`};
  }
`;

export const ItemDeleteButton = styled(RiDeleteBinLine)`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
`;
