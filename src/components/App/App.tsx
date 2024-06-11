import React, { useState, useCallback, useMemo } from "react";
import TodoItem from "../TodoIem/TodoItem";
import FilterLink from "../FilterLink/FilterLink";
import { Todo, Filter } from "../../interfaces";
import {
  AppContainer,
  Filters,
  FiltersButton,
  Footer,
  FooterCount,
  Header,
  HeaderInput,
  Main,
  Title,
  TodoList,
} from "./App.styles";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Тестовое задание", completed: false },
    { id: 2, text: "Прекрасный код", completed: true },
    { id: 3, text: "Покрытие тестами", completed: false },
  ]);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && inputText.trim() !== "") {
        const newTodo: Todo = {
          id: Date.now(),
          text: inputText.trim(),
          completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setInputText("");
      }
    },
    [inputText]
  );

  const handleToggle = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleFilterChange = useCallback((newFilter: Filter) => {
    setFilter(newFilter);
  }, []);

  const handleClearCompleted = useCallback(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "Active") return !todo.completed;
      if (filter === "Completed") return todo.completed;
      return true;
    });
  }, [todos, filter]);

  return (
    <AppContainer>
      <Header>
        <Title>todos</Title>
        <HeaderInput
          className="header__input"
          placeholder="What needs to be done?"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </Header>
      <Main>
        <TodoList>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} />
          ))}
        </TodoList>
      </Main>
      <Footer>
        <FooterCount>
          <strong>{todos.filter((todo) => !todo.completed).length}</strong>{" "}
          items left
        </FooterCount>
        <Filters>
          <FilterLink
            filter="All"
            currentFilter={filter}
            handleFilterChange={handleFilterChange}
          >
            All
          </FilterLink>
          <FilterLink
            filter="Active"
            currentFilter={filter}
            handleFilterChange={handleFilterChange}
          >
            Active
          </FilterLink>
          <FilterLink
            filter="Completed"
            currentFilter={filter}
            handleFilterChange={handleFilterChange}
          >
            Completed
          </FilterLink>
        </Filters>
        <FiltersButton onClick={handleClearCompleted}>
          Clear completed
        </FiltersButton>
      </Footer>
    </AppContainer>
  );
};

export default App;
