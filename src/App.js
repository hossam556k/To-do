import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import {React ,useState} from 'react';
import Todo from './components/Todo';


function App() {
  let [todos, setTodos] = useState([]);
  const [todoToShow , settodoToShow]=useState("all");
  const [toggleAllComplete , setToggleAllComplete] = useState(true);
  const addTodo = (todo)=>{
    setTodos([todo,...todos])
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo)=> todo.id !==id))
  };
  const updateTodoShow  = (s) =>{
    settodoToShow(s);

  }
  if(todoToShow === ("active")){
    todos=todos.filter((todo)=> !todo.complete)
  }else if (todoToShow === ("complete")){
    todos=todos.filter((todo)=> todo.complete)
  }
  const removaAllTodsAreComplete =()=>{
    setTodos(todos.filter((todo)=> !todo.complete));
  }

  const toggleComplete = (id) =>{
    setTodos(todos.map((todo)=>{
      if(todo.id ===id) {
        return {
          ...todo, 
          complete: !todo.complete,
        }
    
      }else {
        return todo;
      }
    }))

  }
  return (
    <div className="container">
    <TodoForm onSubmit={addTodo}/>
    {
      todos.map((todo)=>(
        <Todo key={todo.id} todo={todo} onDelete={() => handleDelete(todo.id)}
          toggleComplete = {()=> toggleComplete(todo.id)}
        />
      ))
    }
    <div>
      <button className='update-btn btn' onClick={()=> updateTodoShow("all")}>All</button>
      <button className='update-btn btn' onClick={()=> updateTodoShow("active")}>Active</button>
      <button className='update-btn btn' onClick={()=> updateTodoShow("complete")}>Complete</button>

    </div>
    <button className='all-btn btn' onClick={removaAllTodsAreComplete}>Remove all complete todos </button>
      <button className='all-btn btn' onClick={()=> {
        setTodos(
          todos.map((todo)=> ({
            ...todo,
            complete:toggleAllComplete,
          }))
        )
        setToggleAllComplete(!toggleAllComplete);
      }}>Toggle all complete: {`${toggleAllComplete}`}</button>

    </div>
  );
}

export default App;
