import React from 'react'
import { useState } from 'react'

function TodoForm() {
    const [Todo, setTodo] = useState("")


  return (
    <div>
        <input type="text" value={Todo}/>
        <button onClick={() => setTodo()}></button>
    </div>
  )
}

export default TodoForm