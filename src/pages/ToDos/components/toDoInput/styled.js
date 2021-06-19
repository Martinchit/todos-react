import styled from 'styled-components';
import { TiDeleteOutline, TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';

export const ToDoInputField = styled.input`
  width: 80%;
  padding: 2%;
  background-color: transparent;

  :focus,
  :active,
  :hover {
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }
`;

export const DeleteIcon = styled(TiDeleteOutline)`
  font-size: 1.5rem;
  margin: 0 3%;
  cursor: pointer;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.colors.danger};
`;

export const ExpandIcon = styled(TiArrowSortedDown)`
  font-size: 1.5rem;
  margin: 0 3%;
  cursor: pointer;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.colors.primary};
`;

export const HideIcon = styled(TiArrowSortedUp)`
  font-size: 1.5rem;
  margin: 0 3%;
  cursor: pointer;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.colors.black};
`;
