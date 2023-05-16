import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import TodoList from '../../molecules/TodoList/TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
    }
    setInputValue('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter a todo"
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default TodoApp;
