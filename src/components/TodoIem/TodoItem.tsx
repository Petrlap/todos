import React from "react";
import { TodoItemProps } from "../../interfaces";
import { Container, Label, ListItem, Toggle } from "./TodoItem.styles";

const TodoItem: React.FC<TodoItemProps> = React.memo(
  ({ todo, handleToggle }) => {
    return (
      <ListItem className="todo-list__item" $completed={todo.completed}>
        <Container className="todo-list__container">
          <Toggle
            className="todo-list__toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
            id={`toggle-${todo.id}`}
          />
          <Label className="todo-list__label" htmlFor={`toggle-${todo.id}`}>
            {todo.text}
          </Label>
        </Container>
      </ListItem>
    );
  }
);

export default TodoItem;
