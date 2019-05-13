import React, { useState,  } from "react";
import "./App.css";


function Todo ({ todo, index, completeTodo, removeTodo }) {
 //Update
// handleUpdate = async (e, _id) => {
//   e.preventDefault();
//   const update = JSON.stringify(this.state);
//   await fetch("http://localhost:4000" + _id, {
//     method: "put",
//     body: update,
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   await this.getTodos();
// };
// //Delete
// handleDelete = async _id => {
//   await fetch("http://localhost:4000/" + _id, {
//     method: "DELETE"
//   });
//   await this.getTodos();
// };

// //Read
// getTodos = async () => {
//   return fetch("http://localhost:4000")
//   .then(results => {
//     return results.json();
//   })
//   .then(results => {
//     setTodos({ todos: results });
//   });
// };
  return (
    
<div 
className="todo"
style={{ textDecoration: todo.isCompleted ? "line-through": ""}}
>
{todo.text}


<div>
  <button onClick={() => completeTodo(index)}>
  Complete
  </button>
  <button onClick={() => removeTodo(index)}>
  x</button>
  </div>
</div>
  );
}





function TodoForm({ addTodo }) {
  // sets an empty state to the form value
  const [value, setValue] = useState("");

  // on submit if text field is empty do nothing
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add New Task"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

//sets current list of todos, as template
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Practice Hooks",
      isCompleted: false
    },
    {
      text: "Do Katas",
      isCompleted: false
    },
    {
      text: "Build CRUD App",
      isCompleted: false
    }
  ]);

  //used to "complete" an item
  
  //grabs list of existing items, adds new item, and displays whole list
  const addTodo = text => {
    // spread operator "..." copies the list so we can add the new item
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    
  };

  return (
    <div className="app">
      <div className="todo-list">
        {/* map creates a new array of items */}
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;