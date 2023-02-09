import React, { FC, useState } from "react";
import InputTask from "./components/InputTask";
import TodoTask from "./components/TodoTask";
import { ITask, TodoContextType } from "./Interfaces";
import { useTodoContext } from "./providers/TodoProvider";

const App: FC = () => {
  const { todoList } = useTodoContext() as TodoContextType;

  return (
    <div className="h-screen w-screen p-1 flex flex-col">
      <div className="bg-blue-900 h-full rounded-t">
        <div className="p-2 text-center w-full h-fit bg-blue-300 rounded-t font-extrabold text-3xl">
          ToDo List
        </div>
        {todoList.map((task: ITask, index: number) => {
          return <TodoTask index={index} key={index} task={task} />;
        })}
      </div>
      <InputTask />
    </div>
  );
};

export default App;
