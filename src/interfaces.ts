export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export interface TodoItemProps {
  todo: Todo;
  handleToggle: (id: number) => void;
}
export interface FilterLinkProps {
  filter: Filter;
  currentFilter: Filter;
  handleFilterChange: (filter: Filter) => void;
  children: React.ReactNode;
}
export interface FilterProps {
  $isSelected: boolean;
}
export interface ItemProps {
  $completed: boolean;
}
export type Filter = "All" | "Active" | "Completed";
