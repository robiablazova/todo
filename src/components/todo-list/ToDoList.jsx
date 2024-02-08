import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        todos: [...state.todos, { id: Date.now(), text: action.text }],
      };
    default:
      return state;
  }
}

function ToDoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    dispatch({ type: "add", text });
    setText("");
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
