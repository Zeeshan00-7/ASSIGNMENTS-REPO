import './App.css';
import { Provider } from 'react-redux';  /**used to provide the Redux store to the application./ */
import store from './store';
import TodoApp from './components/organisms/TodoApp/TodoApp';

function App() {
  return (
    <div className="container">
    <Provider store={store}>
        
        <div className='content'>
          <span>::</span>
        <span> TO-</span>
        <span>DO-</span>
        <span> LIST</span>
      

        </div>




        <div className='todoapp'>

        <TodoApp />

        </div>
        
    
    
    </Provider>
    </div>
  );
}

export default App;









