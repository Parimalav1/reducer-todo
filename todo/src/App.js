import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';
import { initialTodo, reducer } from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialTodo);//using reducer

  const addTask = (newTodo) => {//adding new task
    const newTask = {
        task: newTodo,
        id: Date.now(),
        completed: false
    };
    console.log('addTask called: ' + newTodo);
    dispatch({
      type: 'ADD_TASK',
      payload: newTask 
    });
}

const toggleTask = (taskId) => {//toggling  tasks
  console.log('toggleTask called: ' + taskId);
  dispatch({
      type: 'TOGGLE_TASK',
      payload: {
        id: taskId,
      }
})
}

const clearCompleted  = (evt) => {//clearing completed tasks
    evt.preventDefault();
    console.log('clearCompleted called: ');
    dispatch({
      type: 'CLEAR_COMPLETED',
    });
  }

  return (
    <div className="App">
      <TodoForm  addTask={addTask}
      clearCompleted={clearCompleted}/>
      <TodoList errands={state} toggleTask={toggleTask}/>
    </div>
  );
}

export default App;
