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
  },
});

export const { saveTodo, deleteTodo, editTodo } = toDoSlice.actions;

export const selectTodoList = (state: { todos: { todoList: ITask[] } }) =>
  state.todos.todoList;

export default toDoSlice.reducer;
