import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { editTodo, saveTodo } from "../features/toDoSlice";

interface Props {
  task: string;
  label: string;
  setTask(task: string): void;
  setLabel(label: string): void;
  id: number;
  buttonFunction: string;
  setButtonFunction(str: string): void;
}

const InputTask = ({
  task,
  label,
  setTask,
  setLabel,
  id,
  buttonFunction,
  setButtonFunction,
}: Props) => {
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") setTask(event.target.value);
    else setLabel(event.target.value);
  };

  const onClickButtonHandler = (): void => {
    if (buttonFunction == "Add") {
      dispatch(
        saveTodo({
          task: task,
          label: label,
          id: Date.now(),
        })
      );
    } else {
      dispatch(
        editTodo({
          task: task,
          label: label,
          id: id,
        })
      );
    }
    setButtonFunction("Add");
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
        {/* <input
          type="number"
          onChange={handleChange}
          name="duration"
          value={duration}
          placeholder="Enter Duration"
          className="mt-1 w-full py-1 pl-3 rounded  placeholder-black"
        /> */}
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
          (buttonFunction == "Add" ? "bg-blue-900" : "bg-green-900")
        }
        onClick={onClickButtonHandler}
      >
        {buttonFunction + " Task"}
      </button>
    </div>
  );
};

export default InputTask;
