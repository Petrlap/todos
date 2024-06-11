import styled from "styled-components";
import { ItemProps } from "../../interfaces";

export const ListItem = styled.li<ItemProps>`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  ${({ $completed }) =>
    $completed &&
    `
    .todo-list__label {
      text-decoration: line-through;
      color: #dadada;
    }
  `}
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;
export const Toggle = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #f0f0f0;
  cursor: pointer;
  position: relative;

  &:checked {
    border: 2px solid #7cc3b2;

    &::after {
      content: "";
      display: block;
      width: 7px;
      height: 12px;
      border: solid #7cc3b2;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;
export const Label = styled.label`
  font-weight: 200;
  color: #565656;
  word-break: break-all;
`;
