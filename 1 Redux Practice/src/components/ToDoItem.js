import React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/toDoSlice";

const ToDoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="flex flex-row mx-auto w-1/3 p-1 bg-white mb-1 rounded text-lg">
      <input
        type="checkbox"
        checked={done}
        onChange={handleCheck}
        className="mx-1"
      />
      <p className={done ? " line-through text-gray-500 pb-1" : "pb-1"}>
        {name}
      </p>
    </div>
  );
};

export default ToDoItem;
