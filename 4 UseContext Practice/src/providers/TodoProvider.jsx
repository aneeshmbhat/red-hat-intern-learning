import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoList = ["Learn React Context API"];

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialTodoList);

  const getNumberOfTodoItems = () => todoList.length;

  const addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };

  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  const contextValue = {
    todoList,
    getNumberOfTodoItems,
    addTodo,
    removeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
