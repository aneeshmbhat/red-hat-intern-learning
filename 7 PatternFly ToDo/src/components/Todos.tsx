import {
  List,
  ListComponent,
  ListItem,
  OrderType,
} from "@patternfly/react-core";
import { ITask } from "../Interfaces";
import TodoTask from "./TodoTask";

function Todos({ todoList }: { todoList: ITask[] }) {
  return (
    <List type={OrderType.number} component={ListComponent.ol} isBordered>
      <ListItem className="flex w-full text-xl">
        <></>
      </ListItem>
      {todoList.map((task: ITask, index: number) => {
        return <TodoTask index={index} key={index} task={task} />;
      })}
      <ListItem className="flex w-full text-xl">
        <></>
      </ListItem>
    </List>
  );
}

export default Todos;
