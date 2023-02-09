import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/toDoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    // console.log(`Adding ${input}`);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="mx-auto p-2 w-1/2 flex h-fit mt-auto bg-white rounded">
      <input
        className="p-2 rounded-l w-full focus:outline-none"
        type="text"
        value={input}
        placeholder="Enter ToDo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className=" bg-black text-white rounded px-3 py-2 focus:outline-none"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
