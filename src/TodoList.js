import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo, completeTodo }) => {
    return (
        <>
           <h1> TODO Items:</h1>
           <ul>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo} 
                />
            ))}
        </ul>
        </>
      
    );
};

export default TodoList;
