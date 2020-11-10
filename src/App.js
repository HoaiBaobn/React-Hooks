import React, { useState } from "react";
import "./App.css";
import TodoFrom from "./component/TodoFrom";
import TodoList from "./component/TodoList";

function App() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "hello",
        },
        {
            id: 2,
            title: "hi",
        },
        {
            id: 3,
            title: "konochiwoa",
        },
    ]);
    function handleTodoClik(todo) {
        const index = todoList.findIndex((x) => x.id === todo.id);
        if (index < 0) return;
        const newTodolist = [...todoList];
        newTodolist.splice(index, 1);
        setTodoList(newTodolist);
    }
    function handleFormSubmit(formValue) {
        console.log("form submit", formValue);
        //const new todo to current todo list
        const newTodo = {
            id: todoList.length + 1,
            ...formValue,
        };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }
    return (
        <div className="App">
            <TodoFrom onSubmit={handleFormSubmit} />
            <TodoList todos={todoList} onTodoClick={handleTodoClik} />
        </div>
    );
}

export default App;
