import { ChangeEvent, useEffect, useState } from "react";
import { TodoContextType } from "../Interfaces";
import { useTodoContext } from "../providers/TodoProvider";

const InputTask = () => {
  const {
    addTodo,
    buttonState,
    changeToAdd,
    label,
    setLabel,
    task,
    setTask,
    editTodo,
    getId,
  } = useTodoContext() as TodoContextType;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") setTask(event.target.value);
    else setLabel(event.target.value);
  };

  const onClickButtonHandler = (): void => {
    if (buttonState == "Add") {
      addTodo({ task: task, label: label, id: Date.now() });
    } else {
      editTodo({ task: task, label: label, id: getId() });
    }
    changeToAdd();
    setTask("");
    setLabel("");
  };

  return (
    <div className="flex flex-row w-full h-fit p-2 bg-blue-500 rounded-b">
      <div className="pr-1 w-2/3">
        <input
          type="text"
          placeholder="Enter Task"
          name="task"
          onChange={handleChange}
          value={task}
          className="w-full py-1 pl-3 placeholder-black rounded "
        />
        <input
          type="text"
          onChange={handleChange}
          name="label"
          value={label}
          placeholder="Enter Label"
          className="mt-1 w-full py-1 pl-3 rounded  placeholder-black"
        />
      </div>
      <button
        className={
          "w-1/3 text-white rounded p-1 " +
          (buttonState == "Add" ? "bg-blue-900" : "bg-green-900")
        }
        onClick={onClickButtonHandler}
      >
        {buttonState + " Task"}
      </button>
    </div>
  );
};

export default InputTask;
