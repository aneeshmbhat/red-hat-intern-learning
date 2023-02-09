import { FC } from "react";
import { TodoContextType } from "./Interfaces";
import { useTodoContext } from "./providers/TodoProvider";
import "@patternfly/react-core/dist/styles/base.css";
import InputTaskNew from "./components/InputTask";

import {
  Divider,
  Panel,
  PanelFooter,
  PanelHeader,
  PanelMain,
  PanelMainBody,
} from "@patternfly/react-core";
import Todos from "./components/Todos";

const App: FC = () => {
  const { todoList } = useTodoContext() as TodoContextType;

  return (
    <Panel className="h-screen w-screen flex flex-col">
      <PanelHeader className="text-3xl">Todo List</PanelHeader>
      <Divider />
      <PanelMain>
        <PanelMainBody>
          <div className="w-2/3 mx-auto px-20 bg-gray-300 py-10 rounded">
            <InputTaskNew />
          </div>
          <div className="mt-5 px-10">
            <Todos todoList={todoList} />
          </div>
        </PanelMainBody>
      </PanelMain>
      <PanelFooter className="mt-auto text-right">developedbyamb</PanelFooter>
    </Panel>
  );
};

export default App;
