import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
const { v4: uuidv4 } = require('uuid');


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleDelete = () => {

  }

  const handleEdit = () => {
    
  }

  const handleAdd = () => {
    setTodos([...todos,{id: uuidv4(), todo, isCompleted:false}])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-6 rounded-2xl p-6 bg-violet-100 min-h-[70vh] shadow-lg">
        
  {/* Add Todo Section */}
  <div className="addTodo mb-6">
    <h2 className="text-xl font-semibold mb-3 text-violet-800">Add a Todo</h2>
    <div className="flex gap-3">
      <input onChange={handleChange} value={todo}
        type="text"
        placeholder="Enter your task"
        className="flex-1 px-4 py-2 rounded-lg border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
      <button onClick={handleAdd} className="px-5 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
        Add
      </button>
    </div>
  </div>
  {/* Your Todos */}
  <h2 className="text-xl font-semibold mb-4 text-violet-800">Your Todos</h2>
  <div className="todos space-y-3">
    {todos.map(item=>{

    return <div className="todo flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
      <input type="checkbox" value={todo.isCompleted}/>
      <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
      <div className="buttons flex gap-2">
        <button onClick={handleEdit} className="px-4 py-1 text-sm bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
          Edit
        </button>
        <button onClick={handleDelete} className="px-4 py-1 text-sm bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
          Delete
        </button>
      </div>
    </div>
    })}
  </div>
</div>

    </>
  )
}

export default App