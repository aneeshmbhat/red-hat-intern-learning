import { ChangeEvent, FC, useState } from "react";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

// Additions - Redux Implementation, Update & Move Up/Down Feature, S.No.
// 1st Update - Redux, S.No & Edit
// 2nd Update - Move up & down
// useContext check it out
// localStorage later maybe
// MVP Version
// Tmrw - Redux
// Mon - Full
// React Hooks

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [label, setLabel] = useState<string>("");
  const [list, setList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") setTask(event.target.value);
    else if (event.target.name === "duration")
      setDuration(Number(event.target.value));
    else setLabel(event.target.value);
  };

  const addTask = (): void => {
    setList([...list, { task: task, duration: duration, label: label }]);
    setTask("");
    setDuration(0);
    setLabel("");
  };

  const completeTask = (taskToDelete: string): void => {
    setList(
      list.filter((task) => {
        return task.task != taskToDelete;
      })
    );
  };

  return (
    <div className="h-screen w-screen p-1 flex flex-col">
      <div className="bg-blue-900 h-full rounded-t">
        <div className="p-2 text-center w-full h-fit bg-blue-300 rounded-t font-extrabold text-3xl">
          ToDo List
        </div>
        {list.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
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
            type="number"
            onChange={handleChange}
            name="duration"
            value={duration}
            placeholder="Enter Duration"
            className="mt-1 w-full py-1 pl-3 rounded  placeholder-black"
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
          className="bg-blue-900 w-1/3 text-white rounded p-1"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default App;
