import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo, completeTodo }) => {
    return (
        <>
     
           <li>
            <span 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }} 
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => completeTodo(todo.id)}>completed</button>
        </li>
        </>
     
    );
};

export default TodoItem;
