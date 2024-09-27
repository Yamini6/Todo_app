import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';

const TodoApp = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const completeTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: true }; 
            }
            return todo;
        }));
    };

    const filteredTodos = () => {
        if (filter === 'completed') {
            return todos.filter(todo => todo.completed);
        }
        if (filter === 'pending') {
            return todos.filter(todo => !todo.completed);
        }
        return todos;
    };
console.log("todos:::", todos)
    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo addTodo={addTodo} />
            <Filter setFilter={setFilter} />
            <TodoList 
                todos={filteredTodos()} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
                completeTodo={completeTodo}
            />
        </div>
    );
};

export default TodoApp;
