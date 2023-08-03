import { useState } from "react";

import Todo from "./Todo";

const TodoList = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = (todotext) => {
        const newTodos = [...todos, { todotext }]; //3meli copy lal array wzedli 3a e5era todotext ljdidi elli ana bzida 
        setTodos(newTodos);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //function that saves the todo
        if (!todo) return;
        addTodo(todo);
        setTodo(""); //bsayev l todos berj3 bsayev l todo  bb3at la todos the todo

    }
    const removeTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    const completeTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>TO DO</h1>
            <form onSubmit={handleSubmit}>
                {/* controled input */}
                <input
                    type="text"
                    value={todo}
                    className=""
                    onChange={(e) => setTodo(e.target.value)} />
                <input type="submit" value="submit" />

            </form>
            {todos.map((todo, index) => {
                //i want to show the todo
                return <Todo
                    todo={todo} index={index} key={index} removeTodo={removeTodo} completeTodo={completeTodo}
                />
            })}
        </div>
    )
}

export default TodoList;