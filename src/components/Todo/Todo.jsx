import { useState } from "react"

function Todo({finishTodo, text, isFinished, deleteTodo, editTodo}) {


    const [isEditing, setIsEditing] = useState(false)

    const [todoText, setTodoText] = useState(text)
 // there is a problem with finishTodo , it does not work properly

    return (
        <div>

        <input type="checkbox"   checked={isFinished}  onChange={()=> finishTodo(!isFinished)} 
        />

        {
        isEditing? <input onChange={(e) => setTodoText(e.target.value)} value={todoText}/> : <span>{todoText}</span>
        }
        <button onClick={()=> {
            setIsEditing(!isEditing)
            editTodo(todoText)
        }}>{ isEditing ? 'Save':'Edit'}</button>
        <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo