import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App Component", () => {
  test("renders the header input", () => {
    render(<App />);
    const headerInput = screen.getByPlaceholderText("What needs to be done?");
    expect(headerInput).toBeInTheDocument();
  });

  test("adds a new todo item", () => {
    render(<App />);
    const headerInput = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(headerInput, { target: { value: "New Todo" } });
    fireEvent.keyDown(headerInput, { key: "Enter", code: "Enter" });

    const newItem = screen.getByText("New Todo");
    expect(newItem).toBeInTheDocument();
  });

  test("toggles a todo item", () => {
    render(<App />);
    const toggleCheckbox = screen.getByLabelText("Тестовое задание");
    fireEvent.click(toggleCheckbox);

    expect(toggleCheckbox).toBeChecked();
  });

  test("filters active items", () => {
    render(<App />);
    const activeFilter = screen.getByText("Active");
    fireEvent.click(activeFilter);

    const completedItem = screen.queryByText("Прекрасный код");
    expect(completedItem).not.toBeInTheDocument();
  });

  test("filters completed items", () => {
    render(<App />);
    const completedFilter = screen.getByText("Completed");
    fireEvent.click(completedFilter);

    const activeItem = screen.queryByText("Тестовое задание");
    expect(activeItem).not.toBeInTheDocument();
  });

  test("clears completed items", () => {
    render(<App />);
    const clearCompletedButton = screen.getByText("Clear completed");
    fireEvent.click(clearCompletedButton);

    const completedItem = screen.queryByText("Прекрасный код");
    expect(completedItem).not.toBeInTheDocument();
  });
});
