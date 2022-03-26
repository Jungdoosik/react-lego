import React, { useState, useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };


  return (
    <div>
      <h1>My TO Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder='Write your to do...' />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((items, index) =>
          <li key={index}>{items}</li>
        )}
      </ul>
    </div>
  );
}


export default App;
