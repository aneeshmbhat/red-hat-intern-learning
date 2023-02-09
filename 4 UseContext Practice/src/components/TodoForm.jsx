import React, { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

function TodoForm() {
  const { getNumberOfTodoItems, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoItem) return;
    addTodo(todoItem);
    setTodoItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Number of items: {getNumberOfTodoItems()}</h3>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
