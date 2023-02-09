import React from "react";
import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/toDoSlice";

// const todoList = [
//   { item: "hi", done: false, id: 123456 },
//   { item: "bye", done: true, id: 234567 },
// ];

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="w-screen h-screen flex p-3 bg-gray-600 flex-col">
      {todoList.map((item) => (
        <ToDoItem
          key={item.id}
          name={item.item}
          done={item.done}
          id={item.id}
        />
      ))}
      <Input />
    </div>
  );
}

export default App;
