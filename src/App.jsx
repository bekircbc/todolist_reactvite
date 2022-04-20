import Todo from "./components/Todo.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Do anything for yourself" />
    </div>
  );
}

export default App;
