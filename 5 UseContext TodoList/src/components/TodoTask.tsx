import React, { useState } from "react";
import { ITask, TodoContextType } from "../Interfaces";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { useTodoContext } from "../providers/TodoProvider";

interface Props {
  task: ITask;
  index: number;
}

const TodoTask = ({ task, index }: Props) => {
  const [showBtns, setShowBtns] = useState<boolean>(false);
  const { deleteTodo, moveDown, moveUp, getNumberOfItems, changeToEdit } =
    useTodoContext() as TodoContextType;

  const deleteTask = (): void => {
    setShowBtns(!showBtns);
    deleteTodo(task.id);
  };

  const changeShowBtns = () => {
    setShowBtns(!showBtns);
  };

  const updateTask = (todo: ITask): void => {
    changeToEdit(todo);
  };

  const moveUpHandler = (index: number) => {
    moveUp(index);
    setShowBtns(!showBtns);
  };

  const moveDownHandler = (index: number) => {
    moveDown(index);
    setShowBtns(!showBtns);
  };

  return (
    <div className="flex flex-row px-1 pt-1 text-center text-xl">
      <div className="w-2/3 flex flex-row ml-auto">
        <div className="w-4/5 bg-white rounded-l p-1 pl-3 text-left">
          {index + 1}. {task.task}
        </div>
        <div className="w-1/5 bg-white py-1 text-left">
          <div className="bg-blue-900 text-white rounded pl-2">
            # {task.label}
          </div>
        </div>
      </div>
      <div className="w-1/3 mr-auto bg-white rounded-r p-1 flex text-base">
        {showBtns && (
          <button
            className="w-full bg-green-900 mr-1 rounded text-white flex flex-row"
            onClick={() => updateTask(task)}
          >
            <AiFillEdit className="my-auto ml-auto text-lg" />{" "}
            <span className="my-auto ml-1 mr-auto">Edit</span>
          </button>
        )}
        {showBtns && (
          <button
            className="w-full bg-red-900 mr-1 rounded text-white flex flex-row"
            onClick={() => deleteTask()}
          >
            <AiFillDelete className="my-auto ml-auto text-lg" />
            <span className="my-auto ml-1 mr-auto">Delete</span>
          </button>
        )}
        {showBtns && index != 0 && (
          <button
            className="w-full bg-yellow-900 mr-1 rounded text-white flex flex-row"
            onClick={() => moveUpHandler(index)}
          >
            <AiOutlineArrowUp className="my-auto ml-auto text-lg" />
            <span className="my-auto ml-1 mr-auto">Move Up</span>
          </button>
        )}
        {showBtns && index + 1 != getNumberOfItems() && (
          <button
            className="w-full bg-yellow-900 mr-1 rounded text-white flex flex-row"
            onClick={() => moveDownHandler(index)}
          >
            <AiOutlineArrowDown className="my-auto ml-auto text-lg" />
            <span className="my-auto ml-1 mr-auto">Move Down</span>
          </button>
        )}
        <button
          className="w-full bg-gray-500 rounded text-center"
          onClick={changeShowBtns}
        >
          ...
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
