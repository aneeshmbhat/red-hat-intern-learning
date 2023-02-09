import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, moveDown, moveUp } from "../features/toDoSlice";
import { ITask } from "../Interfaces";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

interface Props {
  task: ITask; // task? for optional
  index: number;
  onClickEditHandler(todo: ITask): void;
  len: number;
}

const TodoTask = ({ task, index, len, onClickEditHandler }: Props) => {
  const dispatch = useDispatch();
  // const handleCheck = (): void => {
  //   dispatch(setCheck(task.id));
  // };
  const [showBtns, setShowBtns] = useState<boolean>(false);

  const deleteTask = (): void => {
    dispatch(deleteTodo(task.id));
    setShowBtns(!showBtns);
  };

  const changeShowBtns = () => {
    setShowBtns(!showBtns);
  };

  const updateTask = (todo: ITask): void => {
    onClickEditHandler(todo);
  };

  const moveUpHandler = (index: number) => {
    dispatch(moveUp(index));
    setShowBtns(!showBtns);
  };

  const moveDownHandler = (index: number) => {
    dispatch(moveDown(index));
    setShowBtns(!showBtns);
  };

  return (
    <div className="flex flex-row px-1 pt-1 text-center text-xl">
      {/* <input
        type="checkbox"
        checked={task.done}
        onChange={handleCheck}
        className="mx-1"
      /> */}
      {/* <div className="w-full mr-1 bg-white rounded p-1">{task.duration}</div> */}
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
        {showBtns && index + 1 != len && (
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
      {/* <button
        className="bg-red-900 p-1 rounded w-1/3"
        onClick={() => deleteTask()}
      >
        Delete Task
      </button> */}
    </div>
  );
};

export default TodoTask;
