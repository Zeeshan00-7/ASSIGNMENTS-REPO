import React from 'react';
import { connect } from 'react-redux';
import Button from '../../atoms/Button/Button';

function TodoList({ todos, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
            <div className="todo-content">{todo}</div>
           <Button onClick={() => handleDelete(index)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
