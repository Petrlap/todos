import React from "react";
import { FilterLinkProps } from "../../interfaces";
import { FilterAnchor, FilterBox } from "./FilterLink.styles";

const FilterLink: React.FC<FilterLinkProps> = React.memo(
  ({ filter, currentFilter, handleFilterChange, children }) => {
    const isSelected = filter === currentFilter;

    return (
      <FilterBox>
        <FilterAnchor
          href="#/"
          $isSelected={isSelected}
          onClick={(e) => {
            e.preventDefault();
            handleFilterChange(filter);
          }}
        >
          {children}
        </FilterAnchor>
      </FilterBox>
    );
  }
);

export default FilterLink;
