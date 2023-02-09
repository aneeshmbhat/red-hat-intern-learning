import {
  ActionGroup,
  Button,
  Form,
  FormGroup,
  TextInput,
} from "@patternfly/react-core";
import { useState } from "react";
import { TodoContextType, ValidationType } from "../Interfaces";
import { useTodoContext } from "../providers/TodoProvider";

const InputTask = () => {
  const {
    addTodo,
    buttonState,
    changeToAdd,
    label,
    setLabel,
    task,
    setTask,
    editTodo,
    getId,
  } = useTodoContext() as TodoContextType;

  const [validatedTask, setValidatedTask] = useState<ValidationType>("default");
  const [validatedLabel, setValidatedLabel] =
    useState<ValidationType>("default");

  const onClickButtonHandler = (): void => {
    if (task != "" && label != "") {
      setValidatedLabel("default");
      setValidatedTask("default");
    } else {
      if (task == "") {
        setValidatedTask("error");
      } else {
        setValidatedTask("success");
      }
      if (label == "") {
        setValidatedLabel("error");
      } else {
        setValidatedLabel("success");
      }
      return;
    }
    if (buttonState == "Add") {
      addTodo({ task: task, label: label, id: Date.now() });
    } else {
      editTodo({ task: task, label: label, id: getId() });
    }
    changeToAdd();
    setTask("");
    setLabel("");
  };

  const resetHandler = (): void => {
    setLabel("");
    setTask("");
    setValidatedLabel("default");
    setValidatedTask("default");
  };

  const changeTask = (task: string) => {
    setTask(task);
    if (task != "") setValidatedTask("success");
    else setValidatedTask("error");
  };

  const changeLabel = (label: string) => {
    setLabel(label);
    if (label != "") setValidatedLabel("success");
    else setValidatedLabel("error");
  };

  return (
    <Form isHorizontal>
      <FormGroup label="Task" isRequired fieldId="simple-form-task">
        <TextInput
          validated={validatedTask}
          isRequired
          type="text"
          id="simple-form-task"
          value={task}
          onChange={changeTask}
        />
      </FormGroup>
      <FormGroup label="Label" isRequired fieldId="simple-form-label">
        <TextInput
          validated={validatedLabel}
          isRequired
          type="text"
          id="simple-form-label"
          name="simple-form-label"
          value={label}
          onChange={changeLabel}
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" onClick={onClickButtonHandler}>
          {buttonState + " Task"}
        </Button>
        <Button variant="link" onClick={resetHandler}>
          Cancel
        </Button>
      </ActionGroup>
    </Form>
  );
};

export default InputTask;
