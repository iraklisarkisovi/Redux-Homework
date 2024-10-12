import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const TodoListPage = () => {
    const { todoList } = useSelector((state) => state.todo);
    const [completedTodos, setCompletedTodos] = useState([]);

    const toggleStatus = (item) => {
        if (completedTodos.includes(item)) {
            setCompletedTodos((prev) => prev.filter(todo => todo !== item));
        } else {
            setCompletedTodos((prev) => [...prev, item]);
        }
    };

    const removeTodo = (item) => {
        setCompletedTodos((prev) => prev.filter(todo => todo !== item));
    };

    return (
        <div>
            <h2>Todo List</h2>
            {todoList.map((item) => (
                <div key={item} style={{margin: '10px'}}>
                    <p style={{margin: '10px'}}>{item} status: {completedTodos.includes(item) ? 'done' : 'undone'} </p>
                    <button onClick={() => toggleStatus(item)}  style={{margin: '10px'}}>
                        {completedTodos.includes(item) ? 'undone' : 'done'}
                    </button>
                    {completedTodos.includes(item) && (
                        <button onClick={() => removeTodo(item)}>
                            Remove
                        </button>
                    )}
                    <hr />
                </div>
            ))}
            <h2>Completed Todos</h2>
            {completedTodos.length > 0 ? (
                completedTodos.map((item) => (
                    <div key={item}>
                        {item} 
                        <button onClick={() => removeTodo(item)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>No completed todos.</p>
            )}
            <h2>To Create Page</h2>
            <Link to={'/create'}>To Create Page</Link>
        </div>
    );
};

export default TodoListPage;
