import { ITask, TodoContextType } from "../Interfaces";
import { useTodoContext } from "../providers/TodoProvider";
import {
  ActionList,
  ActionListItem,
  Button,
  ListItem,
} from "@patternfly/react-core";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  PenIcon,
  TrashIcon,
} from "@patternfly/react-icons";

interface Props {
  task: ITask;
  index: number;
}

const TodoTask = ({ task, index }: Props) => {
  const { deleteTodo, moveDown, moveUp, getNumberOfItems, changeToEdit } =
    useTodoContext() as TodoContextType;

  const deleteTask = (): void => {
    deleteTodo(task.id);
  };

  const updateTask = (todo: ITask): void => {
    changeToEdit(todo);
  };

  const moveUpHandler = (index: number) => {
    moveUp(index);
  };

  const moveDownHandler = (index: number) => {
    moveDown(index);
  };

  return (
    <ListItem className="flex w-full text-xl">
      <div className="w-3/4">
        {index + 1}. {task.task}
      </div>
      <div className="w-1/4"># {task.label}</div>
      <ActionList isIconList className="w-fit">
        <ActionListItem>
          <Button variant="plain" onClick={() => updateTask(task)}>
            <PenIcon className="text-green-900" />
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button variant="plain" onClick={() => deleteTask()}>
            <TrashIcon className="text-red-900" />
          </Button>
        </ActionListItem>

        <ActionListItem>
          <Button
            isDisabled={index == 0}
            variant="plain"
            onClick={() => moveUpHandler(index)}
          >
            <ArrowUpIcon />
          </Button>
        </ActionListItem>

        <ActionListItem>
          <Button
            isDisabled={index + 1 == getNumberOfItems()}
            variant="plain"
            onClick={() => moveDownHandler(index)}
          >
            <ArrowDownIcon />
          </Button>
        </ActionListItem>
      </ActionList>
    </ListItem>
  );
};

export default TodoTask;
