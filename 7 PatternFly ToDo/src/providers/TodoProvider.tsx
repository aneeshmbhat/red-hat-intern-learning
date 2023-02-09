import { createContext, ReactNode, useContext, useState } from "react";
import { ITask, TodoContextType } from "../Interfaces";

const TodoContext = createContext<TodoContextType | null>(null);

const initialTodoList = [
  {
    task: "Filler Task 1",
    label: "Important",
    id: 123456,
  },
  {
    task: "Filler Task 2",
    label: "Casual",
    id: 345678,
  },
  {
    task: "Filler Task 3",
    label: "Casual",
    id: 234567,
  },
];

const initialEditTodo = {
  task: "",
  label: "",
  id: 0,
};

interface Props {
  children: ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [buttonState, setButtonState] = useState("Add");
  const [label, setLabel] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const changeToEdit = (todo: ITask) => {
    setButtonState("Edit");
    setLabel(todo.label);
    setTask(todo.task);
    setId(todo.id);
  };

  const changeToAdd = () => {
    setButtonState("Add");
  };

  const getId = (): number => {
    return id;
  };

  const addTodo = (newTodoItem: ITask) => {
    setTodoList([...todoList, newTodoItem]);
  };

  const deleteTodo = (todoId: number) => {
    const newList = todoList.filter((item) => item.id !== todoId);
    setTodoList(newList);
  };

  const editTodo = (edittedTodo: ITask) => {
    const newList: ITask[] = todoList.map((item) => {
      if (item.id != edittedTodo.id) return item;
      else return edittedTodo;
    });
    setTodoList(newList);
  };

  const moveUp = (upIndex: number) => {
    let res: ITask[] = todoList.filter(
      (item: ITask, index: number) => index + 1 == upIndex || index == upIndex
    );
    const newList = todoList.map((item: ITask, index: number) => {
      if (index + 1 == upIndex) return res[1];
      else if (index == upIndex) return res[0];
      else return item;
    });
    setTodoList(newList);
  };

  const moveDown = (downIndex: number) => {
    let res: ITask[] = todoList.filter(
      (item: ITask, index: number) =>
        index == downIndex || index == downIndex + 1
    );
    const newList = todoList.map((item: ITask, index: number) => {
      if (index == downIndex) return res[1];
      else if (index == downIndex + 1) return res[0];
      else return item;
    });
    setTodoList(newList);
  };

  const getNumberOfItems = () => {
    return todoList.length;
  };

  const contextValue = {
    todoList,
    addTodo,
    deleteTodo,
    editTodo,
    moveUp,
    moveDown,
    getNumberOfItems,
    buttonState,
    changeToAdd,
    changeToEdit,
    label,
    setLabel,
    task,
    setTask,
    getId,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
