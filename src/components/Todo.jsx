import { useState } from "react"
const Editdelete = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editIndex === -1) {
        setTodos([...todos, newTodo]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setNewTodo('');
    }
  };
  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  return (
    <div className="body">
    <h1 >MY TO-DO LIST </h1>
    
    <div className="my">
    <h2>Daily routine</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} {''}
            <button className="bt" onClick={() => editTodo(index)}> Edit</button>        
            <button onClick={() => deleteTodo(index)}> Delete</button>
          </li>
        ))}
      </ul>
      <div className="TO">
        <input  className = "input" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
        <button className="btn"  onClick={ addTodo }>
          {editIndex === -1 ? 'Add Todo' : 'Edit Todo'}
        </button>
      </div>
      </div>
    </div>
  )
}
export default Editdelete