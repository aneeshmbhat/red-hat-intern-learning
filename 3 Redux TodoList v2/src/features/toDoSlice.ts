import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../Interfaces";

const initialState = {
  todoList: <ITask[]>[
    {
      task: "Filler Task 1",
      //   duration: 10,
      label: "Important",
      id: 123456,
      //   done: false,
    },
    {
      task: "Filler Task 2",
      //   duration: 5,
      label: "Casual",
      id: 345678,
      //   done: false,
    },
    {
      task: "Filler Task 3",
      //   duration: 11,
      label: "Casual",
      id: 234567,
      //   done: true,
    },
  ],
};

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action): void => {
      state.todoList.push(action.payload);
    },
    // setCheck: (state, action) => {
    //   state.todoList.forEach((item: ITask) => {
    //     if (action.payload === item.id) {
    //       item.done = !item.done;
    //     }
    //   });
    // },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter(
          (item: ITask) => item.id !== action.payload
        ),
      };
    },
    editTodo: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.map((item: ITask) => {
          if (item.id != action.payload.id) {
            return item;
          } else {
            return action.payload;
          }
        }),
      };
    },
    moveUp: (state, action) => {
      let res: ITask[] = state.todoList.filter(
        (item: ITask, index: number) =>
          index + 1 == action.payload || index == action.payload
      );
      return {
        ...state,
        todoList: state.todoList.map((item: ITask, index: number) => {
          if (index + 1 == action.payload) {
            return res[1];
          } else if (index == action.payload) {
            return res[0];
          } else {
            return item;
          }
        }),
      };
    },
    moveDown: (state, action) => {
      let res: ITask[] = state.todoList.filter(
        (item: ITask, index: number) =>
          index == action.payload || index == action.payload + 1
      );
      return {
        ...state,
        todoList: state.todoList.map((item: ITask, index: number) => {
          if (index == action.payload + 1) {
            return res[0];
          } else if (index == action.payload) {
            return res[1];
          } else {
            return item;
          }
        }),
      };
    },
  },
});

export const { saveTodo, deleteTodo, editTodo, moveUp, moveDown } =
  toDoSlice.actions;

export const selectTodoList = (state: { todos: { todoList: ITask[] } }) =>
  state.todos.todoList;

export default toDoSlice.reducer;
