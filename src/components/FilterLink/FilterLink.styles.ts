import styled from "styled-components";
import { FilterProps } from "../../interfaces";

export const FilterBox = styled.li`
  display: inline;
`;
export const FilterAnchor = styled.a<FilterProps>`
  color: #949493;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  line-height: 18px;

  ${({ $isSelected }) =>
    $isSelected &&
    `
    border-color: #949493;
  `}
`;
