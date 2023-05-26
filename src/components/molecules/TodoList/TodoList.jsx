import React from 'react';
import { connect } from 'react-redux';
import Button from '../../atoms/Button/Button';

function TodoList({ todos, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="todo-container">
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          <div className="todo-content">{todo}</div>
          <Button className="del" onClick={() => handleDelete(index)}>
            <span className="cross">X</span>
          </Button>
        </li>
      ))}
    </ul>
  </div>
  
  
  
  
  
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
