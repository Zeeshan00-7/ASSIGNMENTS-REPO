import React from 'react';

function TodoList({ todos, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
