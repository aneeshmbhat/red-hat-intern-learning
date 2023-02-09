export interface ITask {
  task: string;
  label: string;
  id: number;
}

export interface TodoContextType {
  todoList: ITask[];
  addTodo(task: ITask): void;
  deleteTodo(id: number): void;
  moveUp(index: number): void;
  moveDown(index: number): void;
  editTodo(task: ITask): void;
  getNumberOfItems(): number;
  buttonState: string;
  changeToAdd(): void;
  changeToEdit(task: ITask): void;
  label: string;
  setLabel(label: string): void;
  task: string;
  setTask(task: string): void;
  getId(): number;
}

export type ValidationType = "success" | "warning" | "error" | "default";
