import React from 'react'
import {TodoItem} from './TodoItem'
//stateless func component
export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo =>
          // <TodoItem id={todo.id} name={todo.name} isComplete={todo.isComplete}/>
          // OR: a simpler solution - less verbose with the addition of the key inside
          <TodoItem key={todo.id} {...todo} />

            // <li key={todo.id}>
            //   <input type="checkbox"
            //     defaultChecked={todo.isComplete}/>{todo.name}
            // </li>
            )
        }
      </ul>
    </div>
  )
}
// Note2: what I could do is to pass a TodoItem component with the li data
//to the map iteration.
/*
{props.todos.map(todo =>
    <li key={todo.id}>
      <input type="checkbox"
        defaultChecked={todo.isComplete}/>{todo.name}
    </li>
    )
}
*/
