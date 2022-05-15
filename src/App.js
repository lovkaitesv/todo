import React, {useState} from "react";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import './styles/App.css';

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
  }

  return (
    <div className="App">
      <header>
        <h1>Todo list: {todos.length}</h1>
      </header>
      <TaskList addTask={addTask} />
      {todos.map((todo) => {
        return (
          <TaskItem todo={todo} key={todo.id} toggleTask={handleToggle} removeTask={removeTask} />
        )
      })}
    </div>
  );
}

export default App;
