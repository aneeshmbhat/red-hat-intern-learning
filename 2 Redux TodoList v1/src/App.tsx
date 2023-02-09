import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import InputTask from "./components/InputTask";
import TodoTask from "./components/TodoTask";
import { selectTodoList } from "./features/toDoSlice";
import { ITask } from "./Interfaces";

// 1st Update - Redux, S.No & Edit

const App: FC = () => {
  const list = useSelector(selectTodoList);
  // const [updateTodo, setUpdateTodo] = useState<ITask>();
  const [label, setLabel] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [updateId, setUpdateId] = useState<number>(0);
  const [buttonFunction, setButtonFunction] = useState("Add");

  const onClickEditHandler = (todo: ITask): void => {
    setTask(todo.task);
    setLabel(todo.label);
    setUpdateId(todo.id);
    setButtonFunction("Edit");
    console.log("editHandler");
  };

  return (
    <div className="h-screen w-screen p-1 flex flex-col">
      <div className="bg-blue-900 h-full rounded-t">
        <div className="p-2 text-center w-full h-fit bg-blue-300 rounded-t font-extrabold text-3xl">
          ToDo List
        </div>
        {list.map((task: ITask, index: number) => {
          return (
            <TodoTask
              index={index}
              key={index}
              task={task}
              onClickEditHandler={onClickEditHandler}
            />
          );
        })}
      </div>
      <InputTask
        task={task}
        id={updateId}
        label={label}
        setTask={setTask}
        setLabel={setLabel}
        buttonFunction={buttonFunction}
        setButtonFunction={setButtonFunction}
      />
    </div>
  );
};

export default App;
