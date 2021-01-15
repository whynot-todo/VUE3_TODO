import { Todo } from './../types/todo';

export function setTodos(todos: Todo[]) {
    localStorage.setItem('todo_key',JSON.stringify(todos))
}

export function readTodos():Todo[] {
    return JSON.parse(localStorage.getItem('todo_key') || '[]' ) 
}