import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem1";
import "./App.css";

function App() {
  return (
    <div class="container text center">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </div>
  );
}
export default App;
