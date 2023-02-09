import { ITask } from "../Interfaces";

interface Props {
  task: ITask; // task? for optional
  completeTask(taskToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="flex flex-row px-1 pt-1 text-center text-xl">
      <div className="w-full bg-white rounded p-1">{task.task}</div>
      <div className="w-full mx-1 bg-white rounded p-1">{task.duration}</div>
      <div className="w-full mx-1 bg-white rounded p-1">{task.label}</div>
      <button
        className="bg-red-900 p-1 rounded w-1/3"
        onClick={() => completeTask(task.task)}
      >
        Delete Task
      </button>
    </div>
  );
};

export default TodoTask;
