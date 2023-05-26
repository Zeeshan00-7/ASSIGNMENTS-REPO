import React, { useState } from 'react';
import { connect } from 'react-redux';   /** imports the connect function from the 'react-redux' library. 
It is used to connect the component to the Redux store.  The connect function connects the TodoList component to the Redux 
store by wrapping it with the necessary Redux functionality.*/
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import TodoList from '../../molecules/TodoList/TodoList';

function TodoApp({ todos, addTodo, deleteTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
    }
    setInputValue('');
  };

  const handleDeleteTodo = (index) => {
    deleteTodo(index);
  };

  return (
    
      <div className='wrapper'>
        <div className='add'>
        <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="What TO DO?"
      />
      <Button  onClick={handleAddTodo}>ADD TODO</Button>
        </div>
     
      <div className='LIST'>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
      </div>
      </div>
  );
}
/**The mapStateToProps function is defined to specify how the Redux state should be mapped to the component's props. 
 * It takes the state as an argument and returns an object with the todos property
 *  extracted from the state. This means that the todos property in the component's props will be equal to state.todos. */


const mapStateToProps = (state) => ({     /** function maps the Redux state to the component's props. In this case,
 it maps the todos property from the state to the component's props. */
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch({ type: 'ADD_TODO', payload: todo }),
  deleteTodo: (index) => dispatch({ type: 'DELETE_TODO', payload: index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
