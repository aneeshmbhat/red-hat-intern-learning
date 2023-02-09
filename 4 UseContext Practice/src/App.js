import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./providers/TodoProvider";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoProvider>
        <TodoList />
        <TodoForm />
      </TodoProvider>
    </div>
  );
}

export default App;
